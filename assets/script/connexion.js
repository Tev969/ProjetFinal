const eye = document.querySelector('.feather-eye');
const eyeOff = document.querySelector('.feather-eye-off');
const passwordField = document.querySelector('input[type=password]');

eye.addEventListener('click' , () => {
    eye.style.display = "none"
    eyeOff.style.display = "block"
    passwordField.type = 'text'
});


eyeOff.addEventListener('click' , () => {
    eye.style.display = "block"
    eyeOff.style.display = "none"
    passwordField.type = 'password'
});
