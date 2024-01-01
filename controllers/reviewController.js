const APIFeatures = require('./../utils/apiFeatures');
const Review = require('./../models/reviewModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('../utils/handlerFactory');

exports.getAllReviews = factory.getAll(Review);

exports.getReview = factory.getOne(Review);

exports.setTourUserIds = (req, res, next) => {
  //Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.createReview = factory.createOne(Review);

exports.updateReview = factory.updateOne(Review);

exports.deleteReview = factory.deleteOne(Review);

exports.getAdminReviews = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const Doc = await query;

    if (!Doc) {
      return next(new AppError('No Document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        Doc,
      },
    });
  });
