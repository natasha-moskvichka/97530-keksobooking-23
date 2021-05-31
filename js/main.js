// Функция, возвращающая случайное число
const getRandomInteger = function (min, max) {
  return (min >= 0 && max >= 0) ? Math.floor(Math.random() * (max - min + 1) + min) : null;
};
getRandomInteger(12, 3);

// Функция, возвращающая случайное число с плавающей точкой
const getRandomFloat = function (min, max, num) {
  if (min < 0 || max < 0) {
    return null;
  } else {
    const randomNum =  Math.random() * (max - min) + min;
    return +randomNum.toFixed(num);
  }
};
getRandomFloat(1.1, 5.2, 3);
