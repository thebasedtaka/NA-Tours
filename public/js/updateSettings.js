import axios from 'axios';
import { showAlert } from './alerts';
import catchAsync from '../../utils/catchAsync';
export const updateSettings = async (data, type) => {
  try {
    W;
    const url =
      type === 'password'
        ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword'
        : 'http://127.0.0.1:3000/api/v1/users/updateMe';
    const res = await axios({
      method: 'patch',
      url,
      data,
    });
    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()}Data updated successfully!`);
      window.location.href = '/me';
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};
