import axios from 'axios';
//import '@babel/polyfill';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime.js';
import { showAlert } from './alerts';
/**
 * Logs in a user with the given email and password.
 *
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 */
export const login = async (email, password) => {
  try {
    // Make a POST request to the login API endpoint
    const res = await axios({
      method: 'post',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    // If login is successful, show a success alert and redirect to home page
    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 100);
    }
  } catch (error) {
    // If an error occurs, show an error alert with the error message
    showAlert('success', error.response.data.message);
  }
};

/**
 * Logout function
 * Sends a GET request to the logout API endpoint
 * Redirects the user to the homepage if logout is successful
 * Displays an error message if there is an error logging out
 */
export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });

    if ((res.data.status = 'success')) {
      // Redirect to homepage if the current URL ends with '/me'
      location.assign(
        window.location.href.endsWith('/me') ? '/' : window.location.href
      );
    }
  } catch (err) {
    // Display an error message if there is an error logging out
    showAlert('error', 'Error logging out!');
  }
};
