import { saveToStorage, loadFromStorage } from './localStorageFuncs';
import lodash from 'lodash';

const refs = {
  formReff: document.querySelector('form'),
  inputReff: document.querySelector('input'),
  textareaReff: document.querySelector('textarea'),
};

const CURRENT_FORM_VALUE = 'feedback-form-state';
const throttle = lodash._.throttle;
const savedFormData = loadFromStorage(CURRENT_FORM_VALUE);
let email;
let text;

if (savedFormData) {
  const { email: email = '', text: text = '' } = loadFromStorage(CURRENT_FORM_VALUE);
  refs.inputReff.value = email;
  refs.textareaReff.value = text;
}

refs.formReff.addEventListener('input', throttle(saveFormData, 500));
refs.formReff.addEventListener('click', onBtnClick);

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
  refs.inputReff.value = '';
  refs.textareaReff.value = '';
  console.log(loadFromStorage(CURRENT_FORM_VALUE));
  localStorage.removeItem(CURRENT_FORM_VALUE);
}
