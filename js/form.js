const getAdForm = function () {
  return document.querySelector('.ad-form');
};

const getMapFiltersForm = function () {
  return document.querySelector('.map__filters');
};

/*Массив элемнтов формы*/
const getChildrenArrayForm = function (form) {
  return Array.from(form.children);
};

/*Добавление неактивного состояния у элементов*/
const addDisabledStateElements = function (elements) {
  elements.forEach((elem) => elem.classList.add('disabled'));
};

/*Удаление неактивного состояния у элементов*/
const removeDisabledStateElements = function (elements) {
  elements.forEach((elem) => elem.classList.remove('disabled'));
};

/*Добавление неактивного состояния форме*/
const addDisabledStateForm = function (form) {
  form.classList.add('ad-form--disabled');
};

/*Удаление неактивного состояния у формы*/
const removeDisabledStateForm = function (form) {
  form.classList.remove('ad-form--disabled');
};

/*Добавление неактивного состояния странице*/
const addDisabledStatePage = function () {
  const adForm = getAdForm();
  const mapFilter = getMapFiltersForm();

  addDisabledStateForm(adForm);
  addDisabledStateForm(mapFilter);

  addDisabledStateElements(getChildrenArrayForm(adForm));
  addDisabledStateElements(getChildrenArrayForm(mapFilter));
};

/*Удаление неактивного состояния у страницы*/
const removeDisabledStatePage = function () {
  const adForm = getAdForm();
  const mapFilter = getMapFiltersForm();

  removeDisabledStateForm(adForm);
  removeDisabledStateForm(mapFilter);

  removeDisabledStateElements(getChildrenArrayForm(adForm));
  removeDisabledStateElements(getChildrenArrayForm(mapFilter));
};

window.addEventListener('load', removeDisabledStatePage);

addDisabledStatePage();
