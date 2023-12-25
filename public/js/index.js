/*eslint=disable*/
import '@babel/polyfill';
import { login, logout } from './login.js';
import { displayMap } from './mapbox.js';
import { updateSettings } from './updateSettings.js';
import { bookTour } from './stripe.js';
import { signup } from './signup.js';
import { editReview } from './review.js';
// DOM ELEMENTS

const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const signupForm = document.querySelector('.form--signup');
const userDataForm = document.querySelector('.form-user-data');
const logOutBtn = document.querySelector('.nav__el--logout');
const userPasswordForm = document.querySelector('.form-user-password');
const bookBtn = document.getElementById('book-tour');
const reviewPage = document.querySelector('.reviews__card');

// DELEGATION
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}
if (logOutBtn) {
  logOutBtn.addEventListener('click', logout);
}

if (userDataForm) {
  userDataForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);
    console.log([...form.entries()]);
    await updateSettings(form, 'data');
  });
}

if (userPasswordForm) {
  userPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';
    const passwordCurrent = document.getElementById('password-current').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    const password = document.getElementById('password').value;
    await updateSettings(
      { passwordCurrent, passwordConfirm, password },
      'password'
    );
    document.querySelector('.btn--save-password').textContent = 'Save Password';
    document.getElementById('password-current').value = '';
    document.getElementById('password-confirm').value = '';
    document.getElementById('password').value = '';
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('signup form submitted');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('confirm').value;
    console.log(password, passwordConfirm);
    await signup(name, email, password, passwordConfirm);
  });
}

if (bookBtn) {
  bookBtn.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { tourId } = e.target.dataset;
    console.log(tourId);
    bookTour(tourId);
  });
}

if (reviewPage) {
  const editButton = document.querySelectorAll('.edit');
  let edit = false;

  editButton.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (edit) {
        // Code for the second button press functionality
        const reviewId = btn.dataset.reviewId;
        const reviewBody = e.target.parentNode.querySelector('textarea');
        console.log(reviewBody.value !== '');
        if (reviewBody.value.trim() !== '') {
          editReview(reviewId, reviewBody.value);
        }

        edit = false;
        e.target.parentNode.removeChild(reviewBody);
        e.target.textContent = 'Click me';
      } else {
        // Code for the first button press functionality
        edit = true;
        e.target.textContent = 'Processing...';
        const textBox = document.createElement('textarea');
        textBox.placeholder = 'Enter your edit here';
        e.target.parentNode.appendChild(textBox);
      }
    });
  });
}
