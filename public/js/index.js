/*eslint=disable*/
import '@babel/polyfill';
import { login, logout } from './login.js';
import { displayMap } from './mapbox.js';
import { updateSettings } from './updateSettings.js';
import { bookTour } from './stripe.js';
import { signup } from './signup.js';
import { editReview } from './review.js';
// DOM ELEMENTS
document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded');
});

const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const signupForm = document.querySelector('.form--signup');
const userDataForm = document.querySelector('.form-user-data');
const logOutBtn = document.querySelector('.nav__el--logout');
const userPasswordForm = document.querySelector('.form-user-password');
const bookBtn = document.getElementById('book-tour');
const reviewPage = document.querySelector('.card.cardReview');
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
  const ratingStars = document.querySelectorAll('.reviews__star');
  const reviewsCard = document.querySelector('.reviews__card');
  const reviewText = document.querySelector('.card__text');
  const textBox = document.createElement('input');
  let reviewId, reviewBody;
  let rating;
  let hoveredStar;
  let edit = false;

  function updateStarClasses() {
    ratingStars.forEach((star, index) => {
      star.classList.toggle('hovered', index < hoveredStar);
    });
  }

  function handleMouseEnter(e) {
    // Get the index of the hovered star
    const index = Array.from(ratingStars).indexOf(e.target);
    hoveredStar = index + 1;
    updateStarClasses();
  }

  function handleMouseExit() {
    hoveredStar = null;
    updateStarClasses();
  }

  function handleClick(e) {
    // selects the clicked star and if there is an image, it reroutes to the parent
    const clickedStar =
      e.target.nodeName === 'use' ? e.target.parentNode : e.target;
    rating = +clickedStar.dataset.starIndex + 1;
    // removes the hover effect
    hoveredStar = rating;
    updateStarClasses();
    e.target.removeEventListener('mouseover', handleMouseEnter);
    e.target.removeEventListener('mouseout', handleMouseExit);
    e.target.removeEventListener('click', handleClick);
  }

  ratingStars.forEach((star) => {
    star.addEventListener('mouseover', handleMouseEnter);
    star.addEventListener('mouseout', handleMouseExit);
    star.addEventListener('click', handleClick);
  });

  editButton.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (edit) {
        console.log('hi');
        // Code for the second button press functionality
        reviewId = btn.dataset.reviewId;
        reviewBody =
          e.target.parentNode.parentNode.querySelector('.form__input');
        edit = false;
        editReview(reviewId, reviewBody.value, rating);
        textBox.replaceWith(reviewText);
      } else {
        // Code for the first button press functionality
        edit = true;
        e.target.textContent = 'Update';

        textBox.classList.add('form__input');
        console.log(reviewText);
        textBox.value = reviewText.textContent;
        console.log('click');
        // Replace the text node with the input node
        reviewText.replaceWith(textBox);
      }
    });
  });
}
