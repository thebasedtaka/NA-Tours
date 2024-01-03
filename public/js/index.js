/*eslint=disable*/
//import '@babel/polyfill';
import { login, logout } from './login.js';
import { displayMap } from './mapbox.js';
import { updateSettings } from './updateSettings.js';
import { bookTour } from './stripe.js';
import { signup } from './signup.js';
import { reviewCardInit } from './reviewCard.js';
import {
  handleDeleteUser,
  handleRequest,
  handleTourModal,
  handleUserModal,
} from './admin.js';
// DOM ELEMENTS

const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const signupForm = document.querySelector('.form--signup');
const userDataForm = document.querySelector('.form-user-data');
const logOutBtn = document.querySelector('.nav__el--logout');
const userPasswordForm = document.querySelector('.form-user-password');
const bookBtn = document.getElementById('book-tour');
const reviewPage = document.querySelector('.card.cardReview');
const userCardPage = document.querySelectorAll('.card.cardAdmin');
const editTours = document.querySelector('.edit__tours');
const formPhoto = document.querySelector('.form__user-photo');
const modalContainer = document.getElementById('modal-container');

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
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('confirm').value;
    await signup(name, email, password, passwordConfirm);
  });
}

if (bookBtn) {
  bookBtn.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { tourId } = e.target.dataset;
    bookTour(tourId);
  });
}

if (reviewPage) {
  const reviewsCard = document.querySelectorAll('.card');
  reviewsCard.forEach((review) => {
    const editButton = review.querySelectorAll('.edit');
    const ratingStars = review.querySelectorAll('.reviews__star');
    const reviewText = review.querySelector('.card__text');
    const textBox = document.createElement('input');
    reviewCardInit(editButton, ratingStars, reviewText, textBox);
  });
}

// refactor later probably
if (userCardPage) {
  const adminCard = document.querySelectorAll('.card.cardAdmin');
  adminCard.forEach((card) => {
    const updateButton = card.querySelector('.btn--update');
    const deletebutton = card.querySelector('.btn--delete');
    const userJson = JSON.parse(updateButton.dataset.user);

    deletebutton.addEventListener('click', (e) => {
      e.preventDefault();
      handleRequest(userJson._id, 'delete', 'users');
    });
    updateButton.addEventListener('click', (e) => {
      e.preventDefault();
      formPhoto.src = `/img/users/${userJson.photo}`;

      handleUserModal(modalContainer, userJson._id, e.target);
    });
  });
  window.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      modalContainer.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}

if (editTours) {
  const tourCard = document.querySelectorAll('.card');

  tourCard.forEach((card) => {
    const editButton = card.querySelector('.btn--edit');
    const tourJson = JSON.parse(editButton.dataset.tour);
    editButton.addEventListener('click', (e) => {
      e.preventDefault();
      formPhoto.src = `/img/tours/${tourJson.imageCover}`;
      handleTourModal(modalContainer, tourJson.id, e.target);
    });
  });
}

if (document.querySelector('.admin__reviews')) {
  const reviewsCard = document.querySelectorAll('.admin__reviews__card');
  reviewsCard.forEach((review) => {
    const deleteButton = review.querySelector('.delete');
    deleteButton.addEventListener('click', (e) => {
      e.preventDefault();
      handleRequest(deleteButton.dataset.id, 'delete', 'reviews');
    });
  });
}
