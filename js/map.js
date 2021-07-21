import {removeDisabledStatePage} from './toggle-state-page.js';

const validationForm = document.querySelector('.ad-form');

const reset = validationForm.querySelector('.ad-form__reset');

const addressValueInput = validationForm.querySelector('#address');

const ZOOM_MAP = 13;

const CenterTokyo = {
  LAT: 35.67776,
  LNG: 139.76463,
};

const mainPin = {
  URL: 'img/main-pin.svg',
  SIZE: [40, 40],
  ANCHOR: [20, 40],
};

const pins = {
  URL: 'img/pin.svg',
  SIZE: [52, 52],
  ANCHOR: [26, 52],
};

const onMapLoad = function () {
  removeDisabledStatePage();
};

const map = L.map('card-canvas')
  .on('load', () => {
    onMapLoad();
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
  iconUrl: mainPin.URL,
  iconSize: mainPin.SIZE,
  iconAnchor: mainPin.ANCHOR,
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
  iconUrl: pins.URL,
  iconSize: pins.SIZE,
  iconAnchor: pins.ANCHOR,
});

const addPinsMarker = function (ads) {
  ads.forEach((item) => {
    const pinMarker = L.marker(
      {
        lat: item.location.LAT,
        lng: item.location.LNG,
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

export {setMainPin, onMapLoad, CenterTokyo, validationForm, addPinsMarker, map, reset};
