import { similarAds } from './data.js';

const TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const card = document.querySelector('#card-canvas');

const cardTemplate = document.querySelector('#card')
  .content.querySelector('.popup');

const generateFeature = function (elem, arr) {
  elem.innerHTML = '';

  for (const item of arr) {
    const itemFeature = document.createElement('li');
    itemFeature.classList.add('popup__features', `popup__features--${item}`);
    elem.appendChild(itemFeature);
  }
};

const generateAds = (ads) => {
  const adsFragment = document.createDocumentFragment();

  ads.forEach((ad) => {

    const adsElement = cardTemplate.cloneNode(true);
    adsElement.querySelector('.popup__title').textContent = ad.offer.title;
    adsElement.querySelector('.popup__text--address').textContent = ad.offer.address;
    adsElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
    adsElement.querySelector('.popup__type').textContent = TYPES[ad.offer.type];
    adsElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
    adsElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
    generateFeature(adsElement.querySelector('.popup__features'), ad.offer.features);
    adsElement.querySelector('.popup__description').textContent = ad.offer.description;
    adsElement.querySelector('.popup__photos img').src = ad.offer.photos;
    adsElement.querySelectorAll('.popup__avatar img').src = ad.author.avatar;
    adsFragment.appendChild(adsElement);
  });

  card.appendChild(adsFragment);

  return adsFragment;
};

generateAds(similarAds);
export { generateAds };
