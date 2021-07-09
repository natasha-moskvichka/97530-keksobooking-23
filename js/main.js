import './card.js';
import './data.js';
import {addDisabledStatePage} from './toggleStatePage.js';
import {createSimilarAds, similarAds} from './card.js';

addDisabledStatePage();

const card = document.querySelector('.map__canvas');

createSimilarAds(similarAds);
card.appendChild(createSimilarAds(similarAds));

