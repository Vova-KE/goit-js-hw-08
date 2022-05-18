import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    userEmail: document.getElementsByName('email'),
    userMessage: document.getElementsByName('message'),
    submitBtn: document.getElementsByTagName('button'),
}
console.log(refs.form);
console.log(refs.userEmail);
console.log(refs.userMessage);
console.log(refs.submitBtn);

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    evt.preventDefault();
    // console.log(refs.form.event.currentTarget.value);
     localStorage.setItem('feedback-form-state', form.elements.message.value);
}