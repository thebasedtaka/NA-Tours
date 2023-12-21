const express = require('express');

const { protect, restrictTo } = require('../controllers/authController');
const {
  getCheckoutSession,
  updateBooking,
  getAllBookings,
  getBooking,
  deleteBooking,
  createBooking,
} = require('../controllers/bookingControler');

// get params from tour router
const router = express.Router();
//router.use(protect);

router.use(protect);

router.get('/checkout-session/:tourID', protect, getCheckoutSession);

router.use(restrictTo('admin', 'lead-guide'));
router.get('/', protect, getAllBookings);
router
  .get('/:id', getBooking)
  .post(createBooking)
  .patch(updateBooking)
  .delete(deleteBooking);

module.exports = router;
