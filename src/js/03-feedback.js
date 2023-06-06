import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInput = formEl.querySelector('input[name="email"]');
const messageInput = formEl.querySelector('textarea[name="message"]');

formEl.addEventListener('input', throttle(() => {
  const formObj = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formObj));
}, 500));

const localFormData = localStorage.getItem('feedback-form-state');
if (localFormData) {
  const { email, message } = JSON.parse(localFormData);
  emailInput.value = email;
  messageInput.value = message;
}

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  emailInput.value = '';
  messageInput.value = '';
  console.log(localStorage.getItem('feedback-form-state')); 
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';

  // console.log(localStorage.getItem('feedback-form-state')); 
