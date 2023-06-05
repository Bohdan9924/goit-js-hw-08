import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(() => {
  const formObj = {
    email: formEl.email.value,
    message: formEl.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formObj));
}, 500));

const localFormData = localStorage.getItem('feedback-form-state');
if (localFormData) {
  const { email, message } = JSON.parse(localFormData);
  formEl.email.value = email;
  formEl.message.value = message;
}

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  formEl.email.value = '';
  formEl.message.value = '';
  localStorage.setItem('feedback-form-state', JSON.stringify({
    email: '',
    message: '',
  }));

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
});