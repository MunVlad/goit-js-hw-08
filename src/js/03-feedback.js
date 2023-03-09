const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const input = document.querySelector('input');

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onTextareaText);
input.addEventListener('input', onInputText);

function onFormSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.currentTarget);
  console.log(formData);
}

function onTextareaText(evt) {
  const message = evt.currentTarget.value;
 
}

function onInputText(evt) {
  const email = evt.currentTarget.value;

}