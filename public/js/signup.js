import axios from 'axios';
import catchAsync from '../../utils/catchAsync';
import { showAlert } from './alerts';

/**
 * Sign up a user with the provided credentials
 * @param {string} name - The name of the user
 * @param {string} email - The email of the user
 * @param {string} password - The password of the user
 * @param {string} passwordConfirm - The password confirmation of the user
 */
export const signup = async (name, email, password, passwordConfirm) => {
  try {
    // Make a POST request to the signup endpoint
    const res = await axios({
      method: 'post',
      url: 'http://127.0.0.1:3000/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    // If the response status is success, show a success alert and redirect to /me
    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully');
      window.setTimeout(() => {
        location.assign('/me');
      }, 100);
    }
  } catch (error) {
    // Log any errors that occur during the signup process
    console.error(error);
  }
};
