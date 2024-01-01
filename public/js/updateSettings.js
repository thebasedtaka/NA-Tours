import axios from 'axios';
import { showAlert } from './alerts';
import catchAsync from '../../utils/catchAsync';
/**
 * Update user settings
 * @param {Object} data - The data to update
 * @param {string} type - The type of data to update ('password' or 'general')
 */
export const updateSettings = async (data, type) => {
  try {
    // Define the API endpoint based on the type of data to update
    const url =
      type === 'password'
        ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword'
        : 'http://127.0.0.1:3000/api/v1/users/updateMe';

    // Send a patch request to the API endpoint with the updated data
    const res = await axios({
      method: 'patch',
      url,
      data,
    });

    // If the update is successful, show a success message and redirect to the user's profile page
    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} data updated successfully!`);
      window.location.href = '/me';
    }
  } catch (error) {
    // If there is an error, show an error message
    showAlert('error', error.response.data.message);
  }
};
