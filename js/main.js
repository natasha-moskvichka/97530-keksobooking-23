// Функция, возвращающая случайное число
const getRandomInteger = function (min, max) {
  if (min >= 0 && max >= 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return null;
};
getRandomInteger(-4, 56);

// Функция, возвращающая случайное число с плавающей точкой
const getRandomFloat = function (min, max, digit) {
  if (min < 0 || max < 0) {
    return null;
  } else {
    const randomNum = Math.random() * (max - min) + min;
    return randomNum.toFixed(digit);
  }
};
getRandomFloat(1.2, 10.3, 2);
