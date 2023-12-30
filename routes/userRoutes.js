const express = require('express');
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
  getMe,
  uploadUserPhoto,
  resizeUserPhoto,
  adminUpdateUser,
} = require('../controllers/userController');

const {
  signup,
  login,
  protect,
  resetPassword,
  forgotPassword,
  updatePassword,
  restrictTo,
  logout,
} = require('./../controllers/authController');
const { createReview } = require('../controllers/reviewController');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

//protect all subsequent routes
router.use(protect);

router.patch('/updateMyPassword/', updatePassword);

router.get('/me', getMe, getUser);
router.patch('/updateMe', uploadUserPhoto, resizeUserPhoto, updateMe);
router.delete('/deleteMe', deleteMe);

router.use(restrictTo('admin'));

router.route('/').get(getAllUsers).post(createUser);
router
  .route('/:id')
  .get(getUser)
  .patch(uploadUserPhoto, resizeUserPhoto, adminUpdateUser)
  .delete(deleteUser);

module.exports = router;
