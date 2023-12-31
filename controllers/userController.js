const APIFeatures = require('../utils/apiFeatures');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { use } = require('../routes/userRoutes');
const factory = require('../utils/handlerFactory');
const multer = require('multer');
const sharp = require('sharp');

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/img/users');
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split('/')[1];
//     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//   },
// });

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  // console.log('searching for file', req.file);
  // console.log('req photo', req.photo);
  //if (req.photo) req.file = req.body.photo;
  if (!req.file) return next();
  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);
  next();
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};

  Object.keys(obj).forEach((el) => {
    if (
      allowedFields.includes(el) &&
      obj[el] !== '' &&
      obj[el] !== 'undefined'
    ) {
      newObj[el] = obj[el];
    }
  });

  return newObj;
};

exports.getAllUsers = factory.getAll(User);

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  //Create error if user POSTs password data
  console.log('body', req.file);
  // update user document
  const filteredBody = filterObj(req.body, 'name', 'email', 'photo', 'role');
  if (req.file) filteredBody.photo = req.file.filename;
  console.log(filteredBody);
  const user = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: `success`,
    user,
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  console.log('user id', req.file);
  //await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: `success`,
    data: null,
  });
});

exports.getUser = factory.getOne(User);

exports.updateUser = factory.updateOne(User);

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Undefined Route! Please sign up',
  });
};
exports.deleteUser = factory.deleteOne(User);

exports.adminUpdateUser = catchAsync(async (req, res, next) => {
  const filteredBody = filterObj(req.body, 'name', 'email', 'photo', 'role');
  if (req.file && req.file.filename) filteredBody.photo = req.file.filename;
  console.log(filteredBody);
  const user = await User.findByIdAndUpdate(req.params.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: `success`,
    user,
  });
});
