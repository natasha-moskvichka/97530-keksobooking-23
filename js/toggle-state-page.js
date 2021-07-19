const mainForm = document.querySelector('.ad-form');
const mainFilter = document.querySelector('.map__filters');

const childrenMainForm = Array.from(mainForm.children);

const addDisabledStatePage = function () {
  childrenMainForm.forEach((elem) => elem.classList.add('disabled'));

  mainForm.classList.add('ad-form--disabled');
  mainFilter.classList.add('ad-form--disabled');
};

/*ФУНКЦИЯ НАПИСАНА В СООТВЕТСТВИИ С ДЗ И БУДЕТ ИСПОЛЬЗОВАТЬСЯ, КОГДА ПОЯВИТСЯ КАРТА*/

const removeDisabledStatePage = function () {
  childrenMainForm.forEach((elem) => elem.classList.remove('disabled'));

  mainForm.classList.remove('ad-form--disabled');
  mainFilter.classList.remove('ad-form--disabled');
};

export {addDisabledStatePage, removeDisabledStatePage};
