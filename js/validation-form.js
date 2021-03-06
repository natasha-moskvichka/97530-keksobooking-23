import {showSuccessMessage, showAlert} from './notifications.js';
import {priceTypeOfHousing, ROOM_COUNT} from './data.js';
import {sendData} from './backend.js';

const validationForm = document.querySelector('.ad-form');

const roomNumber = validationForm.querySelector('#room_number');

const capacity = validationForm.querySelector('#capacity');

const submit = validationForm.querySelector('.ad-form__submit');

const typeOfHouses = validationForm.querySelector('#type');

const priceOfHousing = validationForm.querySelector('#price');

const timeIn = validationForm.querySelector('#timein');

const timeOut = validationForm.querySelector('#timeout');

const onSelectChange = function () {
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

capacity.addEventListener('change', onSelectChange);

roomNumber.addEventListener('change', onSelectChange);

/*тип жилья*/

const changeTypeOfHousing = function (typeOfHousing) {
  priceOfHousing.price = priceTypeOfHousing[typeOfHousing];
  priceOfHousing.placeholder = priceOfHousing.price;
};

const onSelectHousingChange = function () {
  changeTypeOfHousing(typeOfHouses.value);
};

typeOfHouses.addEventListener('change', onSelectHousingChange);

/*время*/

const changeTime = function (newSelectTime) {
  timeIn.value = newSelectTime.value;
  timeOut.value = newSelectTime.value;
};

const onSelectTimeOutChange = function (evt) {
  const newSelectTime = evt.target;
  changeTime(newSelectTime);
};

timeOut.addEventListener('change', onSelectTimeOutChange);

timeIn.addEventListener('change', onSelectTimeOutChange);

const onFormSubmit = function () {
  onSelectChange();
};

const setUserFormSubmit = (onSuccess) => {
  validationForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    showSuccessMessage();

    sendData(
      () => onSuccess(),
      () => showAlert('Не удалось отправить форму. Попробуйте ещё раз'),
      new FormData(evt.target),
    );
  });
};

export {onFormSubmit, validationForm, submit, setUserFormSubmit};


