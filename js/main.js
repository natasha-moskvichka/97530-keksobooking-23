import {addDisabledStatePage} from './toggle-state-page.js';
import {onFormSubmit, validationForm, submit} from './validation-form.js';
import {loadMap, setMainPin, CenterTokyo} from './map.js';

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

//const card = document.querySelector('.map__canvas');

/*createSimilarAds(similarAds);
card.appendChild(createSimilarAds(similarAds));*/


