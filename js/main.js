const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const CHECKIN = ['12:00', '13:00', '14:00'];

const CHECKOUT = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const SIMILAR_AD_COUNT = 10;

const ADDRESS_LOCATION_X = 60;

const ADDRESS_LOCATION_Y = 590;

const Authors = {
  MIN: 1,
  MAX: 10,
};

const Prices = {
  MIN: 500,
  MAX: 5000,
};

const Rooms = {
  MIN: 1,
  MAX: 10,
};

const Guests = {
  MIN: 1,
  MAX: 10,
};

const LocationX = {
  LAT_X_MIN: 35.65000,
  LAT_X_MAX: 35.70000,
};

const LocationY = {
  LNG_Y_MIN: 35.65000,
  LNG_Y_MAX: 35.70000,
};

const DIGIT = 5;

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomPositiveInteger = function (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomPositiveFloat = function (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

// Функция, возвращающая рандомный элемент
const getRandomArrayElement = function (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

// Функция, возвращает массив рандомной длины
const getRandomArrayLength = function (arr, length) {
  const newArr = [];

  for (let i = 0; i < length; i += 1) {
    newArr.push(FEATURES[i]);
  }

  return newArr;

};

// Функция, создающая аватар пользователя
const getPathOfAuthorsAvatar = function (elem) {

  if (elem === Authors.MAX - 1) {
    return elem + 1;
  }

  return `0${elem + 1}`;

};

// Функция, генерирующая массив из объектов
const createAd = function (result) {

  return {
    author: {
      avatar: `img/avatar${getPathOfAuthorsAvatar(result)}.png`,
    },
    offer: {
      title: 'Домик у моря',
      address: `${getRandomPositiveInteger(ADDRESS_LOCATION_X, ADDRESS_LOCATION_Y)} ${getRandomPositiveInteger(ADDRESS_LOCATION_X, ADDRESS_LOCATION_Y)}`,
      price: getRandomPositiveInteger(Prices.MIN, Prices.MAX),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(Rooms.MIN, Rooms.MAX),
      guests: getRandomPositiveInteger(Guests.MIN, Guests.MAX),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArrayLength(FEATURES, (getRandomPositiveInteger(0, FEATURES.length - 1))),
      description: 'Самое романтичное место на Земле',
      photos: getRandomArrayElement(PHOTOS),
    },
    location: {
      lat: getRandomPositiveFloat(LocationX.LAT_X_MIN, LocationX.LAT_X_MAX, DIGIT),
      lng: getRandomPositiveFloat(LocationY.LNG_Y_MIN, LocationY.LNG_Y_MAX, DIGIT),
    },
  };
};

// КОММЕНТ ДЛЯ НАСТАВНИКА ПОСЛЕ КОНСУЛЬТАЦИИ - ОШИБКА ПЕРЕМЕННОЙ similarAds, которая представляет из себя массив с данными, но не используется пока
const similarAds = new Array(SIMILAR_AD_COUNT).fill(null).map((element, index) => createAd(index));
console.log(similarAds);

