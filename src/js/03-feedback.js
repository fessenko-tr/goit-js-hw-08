import { saveToStorage, loadFromStorage } from './localStorageFuncs';
import lodash from 'lodash';

const CURRENT_FORM_VALUE = 'feedback-form-state';
const formReff = document.querySelector('form');
const inputReff = formReff.querySelector('input');
const textareaReff = formReff.querySelector('textarea');
const throttle = lodash._.throttle;
let email;
let text;

if (localStorage.getItem(CURRENT_FORM_VALUE)) {
  const { email: email = '', text: text = '' } = loadFromStorage(CURRENT_FORM_VALUE);
  inputReff.value = email;
  textareaReff.innerText = text;
}

formReff.addEventListener('input', throttle(saveFormData, 500));
formReff.addEventListener('click', onBtnClick);

function saveFormData(e) {
  const clickedTargetName = e.target.name;
  const clickedTargetText = e.target.value;

  clickedTargetName === 'email' ? (email = clickedTargetText) : (text = clickedTargetText);

  saveToStorage(CURRENT_FORM_VALUE, { email, text });
}

function onBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  e.preventDefault();
  inputReff.value = '';
  textareaReff.value = '';

  localStorage.removeItem(CURRENT_FORM_VALUE);
}
