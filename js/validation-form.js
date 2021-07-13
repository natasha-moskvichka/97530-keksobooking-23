const validationForm = document.querySelector('.ad-form');

const roomNumber = validationForm.querySelector('#room_number');

const capacity = validationForm.querySelector('#capacity');

const submit = validationForm.querySelector('.ad-form__submit');

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

capacity.addEventListener('change', () => {
  verifyCapacity();
});

roomNumber.addEventListener('change', () => {
  verifyCapacity();
});

const onFormSubmit = function () {
  verifyCapacity();
};

validationForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

submit.addEventListener('click', () => {
  onFormSubmit();
});

export {onFormSubmit};


