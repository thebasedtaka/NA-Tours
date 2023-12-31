const Tour = require('../models/tourModel');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const slugify = require('slugify');
const Booking = require('../models/bookingModel');
const Reviews = require('../models/reviewModel');

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get tour data from collection
  const tours = await Tour.find();

  // 2) Build template
  // 3) Render that template using tour data from 1)
  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
    slugify: slugify,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  // 1) Get the data for the requested tour (including reviews and guides)
  //const slug = slugify(requestedSlug, { lower: true });
  const formatSlug = (slug) => {
    const words = slug.split('-');
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join(' ');
  };

  let tour = await Tour.findOne({
    slug: req.params.slug,
  }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  if (!tour) {
    const formattedSlug = formatSlug(req.params.slug);
    tour = await Tour.findOne({ name: formattedSlug }).populate({
      path: 'reviews',
      fields: 'review rating user',
    });
  }
  if (!tour) {
    return next(new AppError('There is no tour with that name.', 404));
  }

  res
    .status(200)
    .set(
      'Content-Security-Policy',
      "default-src 'self' https://*.cloudflare.com https://js.stripe.com/v3/ ws://127.0.0.1:64717/ https://*.mapbox.com ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://js.stripe.com/v3/ https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js https://js.stripe.com/v3/ https://cdnjs.cloudflare.com https://api.mapbox.com https://js.stripe.com/v3/ 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
    )
    .render('tour', {
      title: `${tour.name} Tour`,
      tour,
    });
});

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).render('account', {
    title: 'Your account',
    user: updatedUser,
  });
});

exports.getLoginForm = catchAsync(async (req, res, next) => {
  res.status(200).render('login', { title: 'Log into your account' });
});
exports.getSignupForm = catchAsync(async (req, res, next) => {
  res.status(200).render('signup', { title: 'Join the family' });
});

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account',
  });
};

exports.getMyTours = catchAsync(async (req, res, next) => {
  // 1) Find all bookings
  const bookings = await Booking.find({ user: req.user.id });

  const tourIDS = bookings.map((el) => el.tour);
  const tours = await Tour.find({ _id: { $in: tourIDS } });

  res.status(200).render('overview', {
    title: 'My Tours',
    tours,
    slugify,
  });
});

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).render('account', {
    title: 'Your account',
    user: updatedUser,
  });
});

exports.getReviews = catchAsync(async (req, res, next) => {
  // Display all reviews
  let reviews = await Reviews.find({ user: req.user.id });

  // Populate the 'tour' field with specific fields
  reviews = await Reviews.populate(reviews, {
    path: 'tour',
    select: 'name imageCover', // Include the fields you need
  });

  // Render reviews
  res.status(200).render('reviews', {
    title: 'Reviews',
    reviews,
  });
});

exports.getUserList = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).render('adminUsers', {
    title: 'Users',
    users,
  });
});

exports.getUpdatePage = catchAsync(async (req, res, next) => {
  res.status(200).render('adminUsers', {
    title: 'User',
  });
});

exports.getAdminTours = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();
  res.status(200).render('adminTours', {
    title: 'Tours',
    tours,
  });
});

exports.getAdminReviews = catchAsync(async (req, res, next) => {
  let reviews = await Reviews.find();

  reviews = await Reviews.populate(reviews, {
    path: 'tour',
    select: 'name imageCover', // Include the fields you need
  });

  res.status(200).render('adminReviews', {
    title: 'Reviews',
    reviews,
  });
});

// TODO : Learn stripe refunds
// possible if refund date > 30 days after booking date
// refund possible if booking is cancelled or expired
exports.getAdminBookings = catchAsync(async (req, res, next) => {
  //const bookings = await Booking.find();
  let bookings = await Booking.find();

  bookings = await Booking.populate(bookings, {
    path: 'tour',
    model: 'Tour',
    select: 'name imageCover', // Include the fields you need from the Tour model
  });

  // Populate the 'user' field with specific fields
  bookings = await Booking.populate(bookings, {
    path: 'user',
    model: 'User',
    select: 'name email photo', // Include the fields you need from the User model
  });

  res.status(200).render('adminBookings', {
    title: 'Users',
    bookings,
  });
});
