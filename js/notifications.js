const error = document.querySelector('#error').content.querySelector('.error');

const success = document.querySelector('#success').content.querySelector('.success');

const errorTemplate = error.cloneNode(true);

const successTemplate = success.cloneNode(true);

const main = document.querySelector('main');

const constants = {
  ESC_KEYCODE: 27,
};

const ALERT_SHOW_TIME = 5000;

const onDocumentKeydown = function (evt) {
  if (evt.keyCode === constants.ESC_KEYCODE) {
    errorTemplate.remove();
    successTemplate.remove();
  }
};

const onDocumentClick = function () {
  errorTemplate.remove();
  successTemplate.remove();
};

/*ошибка объявления*/
const showErrorMessage = function (err) {
  errorTemplate.querySelector('.error__message').textContent = err;
  main.appendChild(errorTemplate);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);
};

/*успешно размещено*/
const showSuccessMessage = function () {
  main.appendChild(successTemplate);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {showErrorMessage, showSuccessMessage, showAlert};
