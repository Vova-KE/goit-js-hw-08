import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form')
}

const userData = {};

fillForm();

refs.form.addEventListener('input', throttle(handleFillForm, 500));
refs.form.addEventListener('submit', handleFormSubmit);

function handleFillForm(event) {
    if (userData) {
        localStorage.setItem('feedback-form-state', JSON.stringify(userData));
    } else {
        { };
    };

    userData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
};

function fillForm() {
    const userDataJson = localStorage.getItem('feedback-form-state');
    const getUserData = JSON.parse(userDataJson);

    if (getUserData) {  
        refs.form.elements.email.value = getUserData.email;
        refs.form.elements.message.value = getUserData.message;
    }
};

function handleFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();

    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
};