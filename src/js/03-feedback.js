import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const userEmail = document.querySelector('input[name=email]');
const userMessage = document.querySelector('textarea[name=message]');

form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);

const savedData = localStorage.getItem('feedback-form-state');
const parsedData = JSON.parse(savedData);

if (parsedData) {
  userEmail.value = parsedData.email;
  userMessage.value = parsedData.message;
}

function handleInput() {
  const email = userEmail.value;
  const message = userMessage.value;
  localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
}

function handleSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;

  if (!email || !message) {
    return alert('Fill all fields!');
  }

  const userData = {
    email,
    message,
  };
  console.log(userData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
}