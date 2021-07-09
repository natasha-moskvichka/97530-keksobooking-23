import {addDisabledStatePage} from './toggle-state-page.js';
import {similarAds} from './data.js';
import {createSimilarAds} from './create-similar-ads.js';

addDisabledStatePage();

const card = document.querySelector('.map__canvas');

createSimilarAds(similarAds);
card.appendChild(createSimilarAds(similarAds));

