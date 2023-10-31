import {sendRequest} from './fetch.js';
import { closeForm } from './form.js';
import { isEscape } from './util.js';
import { onDocumentEscKeyDown } from './form.js';

const MESSAGE_Z_INDEX = 100;

const form = document.querySelector('.img-upload__form');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

let message;

const closeMessage = () => {
  message.classList.add('hidden');
  message.innerHTML = '';
};

const onDocumentMessageEscKeyDown = (evt) => {
  if(isEscape(evt)){
    closeMessage();
    document.addEventListener('keydown', onDocumentEscKeyDown);
    document.removeEventListener('keydown', onDocumentMessageEscKeyDown);
  }
};

const showMessage = (isSuccessful) => {
  if(isSuccessful){
    message = successTemplate.cloneNode(true);
  }
  else{
    message = errorTemplate.cloneNode(true);
    document.removeEventListener('keydown', onDocumentEscKeyDown);
  }

  message.style.zIndex = MESSAGE_Z_INDEX;
  message.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentMessageEscKeyDown);
  document.body.appendChild(message);
};

const closeSendingForm = () => {
  closeMessage();
  closeForm();
};

const onMessageSuccessButtonClick = () => closeSendingForm();

const onMessageErrorButtonClick = () => closeMessage();

const onSuccess = () => {
  showMessage(true);
  message.addEventListener('click', onMessageSuccessButtonClick);
};

const onFail = () => {
  showMessage(false);
  message.addEventListener('click', onMessageErrorButtonClick);
};

const onFormEscKeyDown = (evt) => {
  if(isEscape(evt)){
    if(message){
      closeMessage();
    }

    if(message.classList.contains('success')){
      closeForm();
    }

    form.removeEventListener('keydown', onFormEscKeyDown);
  }
};

const sendData = () => sendRequest(onSuccess, onFail, 'POST', new FormData(form));

form.addEventListener('keydown', onFormEscKeyDown);

export {sendData};
