import {addDisabledStatePage} from './toggle-state-page.js';
import {onFormSubmit, validationForm, submit, setUserFormSubmit} from './validation-form.js';
import {loadMap, setMainPin, CenterTokyo} from './map.js';
import './map.js';
import {getData} from './backend.js';
import {createSimilarAds} from './create-similar-ads.js';
import {SIMILAR_AD_COUNT} from './data.js';

const reset = validationForm.querySelector('.ad-form__reset');

addDisabledStatePage();

loadMap();

submit.addEventListener('click', () => {
  onFormSubmit();
});

reset.addEventListener('click', (evt) => {
  evt.preventDefault();
  validationForm.reset();
  setMainPin(CenterTokyo);
});

getData((similarAds) => {
  createSimilarAds(similarAds.slice(0, SIMILAR_AD_COUNT));
});

setUserFormSubmit();
