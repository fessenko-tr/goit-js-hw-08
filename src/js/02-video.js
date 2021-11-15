import Vimeo from '@vimeo/player';
import { saveToStorage, loadFromStorage } from './localStorageFuncs';
import lodash from 'lodash';

const CURRENT_TIME = 'currentTime';
const videoReff = document.querySelector('iframe');
const throttle = lodash._.throttle;
const player = new Vimeo(videoReff);
const preSavedTime = loadFromStorage(CURRENT_TIME);

if (preSavedTime) {
  player.setCurrentTime(preSavedTime);
}

player.on('timeupdate', throttle(saveTime, 500));

function saveTime() {
  const saveCurrentSec = sec => {
    saveToStorage(CURRENT_TIME, sec);
  };
  player.getCurrentTime().then(saveCurrentSec);
}
