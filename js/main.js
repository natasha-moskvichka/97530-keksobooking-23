import {setMainPin, CenterTokyo, onMapLoad, addPinsMarker, reset} from './map.js';
import {onFormSubmit, validationForm, submit} from './validation-form.js';
import {similarAds, SIMILAR_AD_COUNT} from './data.js';
import {addDisabledStatePage} from './toggle-state-page.js';

addDisabledStatePage();

onMapLoad();

const getDataPins = function (adverts) {
  addPinsMarker(adverts.slice(0, SIMILAR_AD_COUNT));
};

getDataPins(similarAds);

submit.addEventListener('click', () => {
  onFormSubmit();
});

reset.addEventListener('click', (evt) => {
  evt.preventDefault();
  validationForm.reset();
  setMainPin(CenterTokyo);
});

setMainPin(CenterTokyo);

//const card = document.querySelector('.map__canvas');

/*createSimilarAds(similarAds);
card.appendChild(createSimilarAds(similarAds));*/


