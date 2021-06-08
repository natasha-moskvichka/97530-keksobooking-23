const AUTHORS = ['img/avatars/user{01}.png', 'img/avatars/user{02}.png', 'img/avatars/user{03}.png', 'img/avatars/user{04}.png',
  'img/avatars/user{05}.png', 'img/avatars/user{06}.png', 'img/avatars/user{07}.png', 'img/avatars/user{08}.png', 'img/avatars/user{09}.png',
  'img/avatars/user{10}.png'];
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
const PRICES = {
  PRICE_MIN: 500,
  PRICE_MAX: 5000,
};
const ROOMS = {
  ROOM_MIN: 1,
  ROOM_MAX: 10,
};
const GUESTS = {
  GUESTS_MIN: 1,
  GUESTS_MAX: 10,
};
const LOCATION_X = {
  LAT_X_MIN: 35.65000,
  LAT_X_MAX: 35.70000,
};
const LOCATION_Y = {
  LNG_Y_MIN: 35.65000,
  LNG_Y_MAX: 35.70000,
};
const DIGIT = 5;

// Функция, возвращающая случайное число
const getRandomInteger = function (min, max) {
  if (min >= 0 && max >= 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return null;
};

// Функция, возвращающая случайное число с плавающей точкой
const getRandomFloat = function (min, max, digit) {
  if (min < 0 || max < 0) {
    return null;
  } else {
    const randomNum = Math.random() * (max - min) + min;
    return randomNum.toFixed(digit);
  }
};

// Функция, возвращаяющая рандомный элемент
const getRandomArrayElement = function (elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
};

// Функция, возвращает строку из массива рандомной длины
const createRandomString = function (arr, length) {
  const newArr = [];
  for (let i = 0; i < length; i += 1) {
    newArr.push(FEATURES[i]);
  }
  return newArr.join(', ');
};

// Функция, генерирующая массив из объектов
const createAd = function () {
  return {
    author: {
      avatar: getRandomArrayElement(AUTHORS),
    },
    offer: {
      title: 'Домик у моря',
      address: `${getRandomInteger(ADDRESS_LOCATION_X, ADDRESS_LOCATION_Y)} ${getRandomInteger(ADDRESS_LOCATION_X, ADDRESS_LOCATION_Y)}`,
      price: getRandomInteger(PRICES.PRICE_MIN, PRICES.PRICE_MAX),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(ROOMS.ROOM_MIN, ROOMS.ROOM_MAX),
      guests: getRandomInteger(GUESTS.GUESTS_MIN, GUESTS.GUESTS_MAX),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: createRandomString(FEATURES, (getRandomInteger(0, FEATURES.length - 1))),
      description: 'Самое романтичное место на Земле',
      photos: getRandomArrayElement(PHOTOS),
    },
    location: {
      lat: getRandomFloat(LOCATION_X.LAT_X_MIN, LOCATION_X.LAT_X_MAX, DIGIT),
      lng: getRandomFloat(LOCATION_Y.LNG_Y_MIN, LOCATION_Y.LNG_Y_MAX, DIGIT),
    },
  };
};

// КОММЕНТ ДЛЯ НАСТАВНИКА ПОСЛЕ КОНСУЛЬТАЦИИ - ОШИБКА В НЕИСПОЛЬЗОВАНИИ ПЕРЕМЕННОЙ
const similarAds = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createAd());
