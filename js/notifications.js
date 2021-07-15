const error = document.querySelector('#error').content.querySelector('.error');

const success = document.querySelector('#success').content.querySelector('.success');

const errorTemplate = error.cloneNode(true);

const successTemplate = success.cloneNode(true);

const main = document.querySelector('main');

const constants = {
  ESC_KEYCODE: 27,
};

const onSuccessEscPress = function (evt) {
  if (evt.keyCode === constants.ESC_KEYCODE) {
    successTemplate.remove();
  }
};

const onSuccessClick = function () {
  successTemplate.remove();
};

const onErrorEscPress = function (evt) {
  if (evt.keyCode === constants.ESC_KEYCODE) {
    errorTemplate.remove();
  }
};

const onErrorClick = function () {
  errorTemplate.remove();
};

/*ошибка объявления*/
const showErrorMessage = function (err) {
  errorTemplate.querySelector('.error__message').textContent = err;
  main.appendChild(errorTemplate);
  document.addEventListener('keydown', onErrorEscPress);
  document.addEventListener('click', onErrorClick);
};

/*успешно размещено*/
const showSuccessMessage = function () {
  main.appendChild(successTemplate);
  document.addEventListener('keydown', onSuccessEscPress);
  document.addEventListener('click', onSuccessClick);
};

export {showErrorMessage, showSuccessMessage};
