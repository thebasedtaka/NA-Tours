const express = require('express');
const {
  getOverview,
  getTour,
  getLoginForm,
  getAccount,
  updateUserData,
  getMyTours,
} = require('../controllers/viewsController');
const { protect, isLoggedIn } = require('../controllers/authController');
const { createBookingCheckout } = require('../controllers/bookingControler');

const router = express.Router();

router.get('/me', protect, getAccount);
router.get('/', createBookingCheckout, isLoggedIn, getOverview);
router.get('/tour/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, getLoginForm);
router.post('/submit-user-data', protect, updateUserData);
router.get('/my-tours', protect, isLoggedIn, getMyTours);
module.exports = router;
