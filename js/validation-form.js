const validationForm = document.querySelector('.ad-form');

const roomNumber = validationForm.querySelector('#room_number');

const capacity = validationForm.querySelector('#capacity');

const submit = validationForm.querySelector('.ad-form__submit');

const verifyCapacity = function () {
  const roomChecked = parseInt(roomNumber.value, 10);
  const capacityChecked = parseInt(capacity.value, 10);

  let message;

  if (roomChecked !== 100 && (capacityChecked > roomChecked || capacityChecked < 1)) {
    message = 'Количество гостей не должно превышать количество комнат';
  } else if (roomChecked === 100 && capacityChecked !== 0) {
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

const onSubmitClick = function () {
  verifyCapacity();
};

submit.addEventListener('submit', onSubmitClick);

export {onSubmitClick};

