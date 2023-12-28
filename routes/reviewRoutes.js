const express = require('express');
const {
  getAllReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
  setTourUserIds,
  getTourName,
} = require('../controllers/reviewController');
const { protect, restrictTo } = require('../controllers/authController');
const { getMyTours } = require('../controllers/viewsController');

// get params from tour router
const router = express.Router({ mergeParams: true });
router.use(protect);

router.route('/').get(getAllReviews).post(setTourUserIds, createReview);
router
  .route('/:id')
  .get(getReview)
  .patch(restrictTo('user', 'admin'), updateReview)
  .delete(restrictTo('user', 'admin'), deleteReview);

router.route;

module.exports = router;
