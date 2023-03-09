import { save, load } from '../js/storage';
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('[name="message"]');
const inputEl = document.querySelector('[name="email"]');
const STORAGE_KEY = 'feedback-form-state';

let feedbackData = {
  email: '',
  message: '',
};

formEl.addEventListener('input', throttle(updateFeedbackData, 500));
formEl.addEventListener('submit', onFormSubmit);

if (load(STORAGE_KEY) !== undefined) {
  feedbackData = load(STORAGE_KEY);
  inputEl.value = feedbackData.email;
  textareaEl.value = feedbackData.message;
}

function updateFeedbackData(evt) {
  feedbackData[evt.target.name] = evt.target.value;
  save(STORAGE_KEY, feedbackData);
  }

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(feedbackData);

  formEl.reset();
  localStorage.clear();
}