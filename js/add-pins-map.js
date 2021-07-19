import {addDisabledStatePage, removeDisabledStatePage} from './toggle-state-page.js';
import {CENTER_TOKYO, PinsOfMap, SIMILAR_AD_COUNT} from './data.js';

const validationForm = document.querySelector('.ad-form');

const buttonReset = validationForm.querySelector('.ad-form__reset');

const addressValue = validationForm.querySelector('#address');

addDisabledStatePage();

const map = L.map('card-canvas')
  .on('load', () => {
    removeDisabledStatePage();
  })
  .setView(CENTER_TOKYO, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon(PinsOfMap.MAIN_ICON);
const generalPinIcon = L.icon(PinsOfMap.GENERAL_ICON);

const addGeneralPinMarker = function (ads) {
  ads.forEach((item) => {
    const PinMarker = L.marker(item.location, {
      icon: generalPinIcon,
    });
    PinMarker
      .addTo(map).bindPopup(item.offer.title);

  });
};

const mainPinMarker = L.marker(
  CENTER_TOKYO,
  {
    icon: mainPinIcon,
    draggable: true,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('move', (evt) => {
  addressValue.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const defaultPoints = function () {
  mainPinMarker.setLatLng(CENTER_TOKYO);
  map.setView(CENTER_TOKYO, 13);
};

const getActualPins = function (adverts) {
  addGeneralPinMarker(adverts.slice(0, SIMILAR_AD_COUNT));
};

buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  validationForm.reset();
  defaultPoints(CENTER_TOKYO);
});

export {addGeneralPinMarker, defaultPoints, getActualPins};
