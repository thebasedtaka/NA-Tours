import axios from 'axios';
import { showAlert } from './alerts';
import catchAsync from '../../utils/catchAsync';
export const updateSettings = async (data, type) => {
  try {
    console.log('data', data.value);
    const url =
      type === 'password'
        ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword'
        : 'http://127.0.0.1:3000/api/v1/users/updateMe';
    // const formDataObject = Object.fromEntries(data.entries());
    // console.log('formDataObject', formDataObject);
    const res = await axios({
      method: 'patch',
      url,
      data,
    });
    console.log('response', data);
    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()}Data updated successfully!`);
      window.location.href = '/me';
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};
