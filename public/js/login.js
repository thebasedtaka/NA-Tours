import axios from 'axios';
import '@babel/polyfill';
import { showAlert } from './alerts';
export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'post',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 100);
    }
  } catch (error) {
    showAlert('success', error.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/users/logout',
    });

    if ((res.data.status = 'success')) {
      console.log(window.location.href == '/me');
      location.assign(
        window.location.href.endsWith('/me') ? '/' : window.location.href
      );
    }
  } catch (err) {
    showAlert('error', 'Error logging out!');
  }
};
