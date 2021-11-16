import Vimeo from '@vimeo/player';
import { saveToStorage, loadFromStorage } from './local-storage-funcs';
import lodash from 'lodash';

const CURRENT_TIME_KEY = 'videoplayer-current-time';
const videoReff = document.querySelector('iframe');
const throttle = lodash._.throttle;
const player = new Vimeo(videoReff);
const preSavedTime = loadFromStorage(CURRENT_TIME_KEY);

if (preSavedTime) {
  player.setCurrentTime(preSavedTime);
}

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime() {
  const saveCurrentSec = sec => {
    saveToStorage(CURRENT_TIME_KEY, sec);
  };
  player.getCurrentTime().then(saveCurrentSec);
}
