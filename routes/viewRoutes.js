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
  getUpdateTours,
  getAdminTours,
  getAdminReviews,
  getAdminBookings,
} = require('../controllers/viewsController');
const { protect, isLoggedIn } = require('../controllers/authController');
const {
  createBookingCheckout,
  getAllBookings,
} = require('../controllers/bookingControler');
const { getAllReviews } = require('../controllers/reviewController');

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
router.get('/admin/tours', protect, isLoggedIn, getAdminTours);
router.get('/admin/users', protect, isLoggedIn, getUserList);
router.get('/admin/reviews', protect, isLoggedIn, getAdminReviews);
router.get('/admin/bookings', protect, isLoggedIn, getAdminBookings);

module.exports = router;
