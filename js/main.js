import {addDisabledStatePage} from './toggle-state-page.js';
import {onFormSubmit, validationForm, submit, setUserFormSubmit} from './validation-form.js';
import {loadMap, setMainPin, CenterTokyo} from './map.js';
import './filter.js';
const reset = validationForm.querySelector('.ad-form__reset');

addDisabledStatePage();

loadMap();

submit.addEventListener('click', () => {
  onFormSubmit();
  setUserFormSubmit();
});

reset.addEventListener('click', (evt) => {
  evt.preventDefault();
  validationForm.reset();
  setMainPin(CenterTokyo);
});

