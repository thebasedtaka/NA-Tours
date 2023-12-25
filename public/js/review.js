import axios from 'axios';
import { showAlert } from './alerts';

export const editReview = async (id, body) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: `/api/v1/reviews/${id}`,
      data: { review: body },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully');
      window.setTimeout(() => {
        location.reload();
      }, 100);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};
