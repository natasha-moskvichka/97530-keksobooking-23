import {CENTER_TOKYO} from './data.js';
import {getActualPins, defaultPoints} from './add-pins-map.js';
import {onFormSubmit} from './validation-form.js';
import {similarAds} from './data.js';

getActualPins(similarAds);
defaultPoints(CENTER_TOKYO);

//const card = document.querySelector('.map__canvas');

/*createSimilarAds(similarAds);
card.appendChild(createSimilarAds(similarAds));*/

onFormSubmit();

