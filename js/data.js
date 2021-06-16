import { getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement } from './util.js';

const AUTHORS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

const Prices = {
  PRICE_MIN: 500,
  PRICE_MAX: 5000,
};

const Rooms = {
  ROOM_MIN: 1,
  ROOM_MAX: 10,
};

const Guests = {
  GUESTS_MIN: 1,
  GUESTS_MAX: 10,
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

// Функция, возвращает массив рандомной длины
const getRandomArrayLength = function (arr, length) {
  const newArr = [];
  for (let i = 0; i < length; i += 1) {
    newArr.push(FEATURES[i]);
  }
  return newArr;
};

// Функция, создающая строку с рандомным значением
const getRandomConcatString = function () {
  const newString = getRandomArrayElement(AUTHORS);
  if (newString < AUTHORS.length) {
    return `img/avatars/user0${newString}.png`;
  } else if (newString >= AUTHORS.length) {
    return `img/avatars/user${newString}.png`;
  }
};

// Функция, генерирующая массив из объектов
const createAd = function () {
  return {
    author: {
      avatar: getRandomConcatString(AUTHORS),
    },
    offer: {
      title: 'Домик у моря',
      address: `${getRandomPositiveInteger(ADDRESS_LOCATION_X, ADDRESS_LOCATION_Y)} ${getRandomPositiveInteger(ADDRESS_LOCATION_X, ADDRESS_LOCATION_Y)}`,
      price: getRandomPositiveInteger(Prices.PRICE_MIN, Prices.PRICE_MAX),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(Rooms.ROOM_MIN, Rooms.ROOM_MAX),
      guests: getRandomPositiveInteger(Guests.GUESTS_MIN, Guests.GUESTS_MAX),
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
const similarAds = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createAd());
export { similarAds };
