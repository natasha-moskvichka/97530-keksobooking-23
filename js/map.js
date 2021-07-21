import {removeDisabledStatePage} from './toggle-state-page.js';
import {getData} from './backend.js';
import {SIMILAR_AD_COUNT} from './data.js';

const validationForm = document.querySelector('.ad-form');

const addressValueInput = validationForm.querySelector('#address');

const ZOOM_MAP = 13;

const CenterTokyo = {
  LAT: 35.67776,
  LNG: 139.76463,
};

const mainPin = {
  url: 'img/main-pin.svg',
  size: [40, 40],
  anchor: [20, 40],
};

const pins = {
  url: 'img/pin.svg',
  size: [52, 52],
  anchor: [26, 52],
};

const map = L.map('card-canvas')
  .on('load', () => {
    removeDisabledStatePage();
  })
  .setView({
    lat: CenterTokyo.LAT,
    lng: CenterTokyo.LNG,
  },
  ZOOM_MAP);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: mainPin.url,
  iconSize: mainPin.size,
  iconAnchor: mainPin.anchor,
});

const mainPinMarker = L.marker(
  {
    lat: CenterTokyo.LAT,
    lng: CenterTokyo.LNG,
  },
  {
    icon: mainPinIcon,
    draggable: true,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('move', (evt) => {
  addressValueInput.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const pinIcon = L.icon({
  iconUrl: pins.url,
  iconSize: pins.size,
  iconAnchor: pins.anchor,
});

const addPinsMarker = function (ads) {
  ads.forEach((item) => {
    const pinMarker = L.marker(
      {
        lat: item.location.lat,
        lng: item.location.lng,
      }, {
        icon: pinIcon,
      });
    pinMarker
      .addTo(map).bindPopup(item.offer.title);
  });
};

const setMainPin = function () {
  mainPinMarker.setLatLng({
    lat: CenterTokyo.LAT,
    lng: CenterTokyo.LNG,
  });
  map.setView({
    lat: CenterTokyo.LAT,
    lng: CenterTokyo.LNG,
  }, ZOOM_MAP);
};

getData((adverts) => {
  addPinsMarker(adverts.slice(0, SIMILAR_AD_COUNT));
});

function loadMap () {
  removeDisabledStatePage();
  setMainPin(CenterTokyo);
}

export {setMainPin, loadMap, CenterTokyo};
