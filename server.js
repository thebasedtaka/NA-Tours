import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';
console.log('active');
dotenv.config({ path: './config.env' });

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('exception.. shutting down..');
  //shutdown server before close
  process.exit(1);
});

const dbConnect = async () => {
  const DB = process.env.DATABASE;
  try {
    mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database Connected');
  } catch (err) {
    console.error('Error', err);
  }
};

const port = process.env.PORT || 3001;
const server = app.listen(port, async () => {
  dbConnect();
  console.log(`App running on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('rejection.. shutting down..');
  //shutdown server before close
  server.close(() => {
    process.exit(1);
  });
});
