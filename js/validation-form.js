import {showErrorMessage, showSuccessMessage} from './notifications.js';

const validationForm = document.querySelector('.ad-form');

const roomNumber = validationForm.querySelector('#room_number');

const capacity = validationForm.querySelector('#capacity');

const submit = validationForm.querySelector('.ad-form__submit');

const typeOfHouses = validationForm.querySelector('#type');

const priceOfHousing = validationForm.querySelector('#price');

const timeIn = validationForm.querySelector('#timein');

const timeOut = validationForm.querySelector('#timeout');

const formReset = validationForm.querySelector('.ad-form__reset');

const formFields = validationForm.querySelectorAll('fieldset > input, select');

const priceTypeOfHousing = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const ROOM_COUNT = 100;

const verifyCapacity = function () {
  const roomChecked = parseInt(roomNumber.value, 10);
  const capacityChecked = parseInt(capacity.value, 10);

  let message;

  if (roomChecked !== ROOM_COUNT && (capacityChecked > roomChecked || capacityChecked < 1)) {
    message = 'Количество гостей не должно превышать количество комнат';
  } else if (roomChecked === ROOM_COUNT && capacityChecked !== 0) {
    message = 'Выберите пункт не для гостей';
  } else {
    message = '';
  }

  capacity.setCustomValidity(message);

};

capacity.addEventListener('change', verifyCapacity);

roomNumber.addEventListener('change', verifyCapacity);

/*тип жилья*/

const changeTypeOfHousing = function (typeOfHousing) {
  priceOfHousing.price = priceTypeOfHousing[typeOfHousing];
  priceOfHousing.placeholder = priceOfHousing.price;
};

const setHousing = function () {
  changeTypeOfHousing(typeOfHouses.value);
};

typeOfHouses.addEventListener('change', setHousing);

/*время*/

const changeTime = function (newSelectTime) {
  timeIn.value = newSelectTime.value;
  timeOut.value = newSelectTime.value;
};

const selectTimeChange = function (evt) {
  const newSelectTime = evt.target;
  changeTime(newSelectTime);
};

timeOut.addEventListener('change', selectTimeChange);

timeIn.addEventListener('change', selectTimeChange);

const markedValidFields = function () {
  formFields.forEach((field) => {
    if (!field.validity.valid) {
      field.classList.add('field-invalid');
    }
  });
};

const onFormSubmit = function () {
  verifyCapacity();
  //markedValidFields();
  showErrorMessage();
  showSuccessMessage();
};

validationForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

submit.addEventListener('click', () => {
  onFormSubmit();
  markedValidFields();
});

const unMarkedValidFields = function (field) {
  const hasFieldClass = field.classList.contains('field-invalid');
  if (hasFieldClass) {
    field.classList.remove('field-invalid');
  }
};

const onResetForm = function () {
  formFields.forEach((field) => {
    unMarkedValidFields(field);
  });
};

formReset.addEventListener('click', onResetForm);

export {onFormSubmit};


