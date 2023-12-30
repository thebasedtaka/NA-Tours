const express = require('express');
const {
  getOverview,
  getTour,
  getLoginForm,
  getAccount,
  updateUserData,
  getMyTours,
  getSignupForm,
  getReviews,
  getUserList,
  getUpdatePage,
} = require('../controllers/viewsController');
const { protect, isLoggedIn } = require('../controllers/authController');
const {
  createBookingCheckout,
  getAllBookings,
} = require('../controllers/bookingControler');

const router = express.Router();

router.get('/me', protect, getAccount);
router.get('/', createBookingCheckout, isLoggedIn, getOverview);
router.get('/tour/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, getLoginForm);
router.post('/submit-user-data', protect, updateUserData);
router.get('/my-tours', protect, isLoggedIn, getMyTours);
router.get('/signup', getSignupForm);
router.get('/reviews', protect, isLoggedIn, getReviews);

// Admin
router.get('/admin/tours', protect, isLoggedIn);
router.get('/admin/users', protect, isLoggedIn, getUserList);
router.get('/admin/users/update', protect, isLoggedIn, getUpdatePage);
router.get('/admin/reviews', protect, isLoggedIn);
router.get('/admin/bookings', protect, isLoggedIn);

module.exports = router;
