import axios from 'axios';
import { showAlert } from './alerts';
/**
 * Edits a review.
 *
 * @param {string} id - The ID of the review to be edited.
 * @param {string} body - The updated review text.
 * @param {number} rating - The updated rating.
 */
export const editReview = async (id, body, rating) => {
  // Create an empty object to store the params
  const params = {};

  // If  parameter is provided, add it to the params object
  if (body) params.review = body;
  if (rating) params.rating = +rating;

  // If no parameters were provided, return early
  if (Object.keys(params).length === 0) return;

  try {
    // Construct the URL for the API endpoint
    const url = `/api/v1/reviews/${id}`;

    // Send a PATCH request to the API endpoint with the params object
    const res = await axios.patch(url, params);

    // If the request is successful, display a success message and reload the page
    if (res.data.status === 'success') {
      showAlert('success', 'Review updated successfully!');
      window.setTimeout(() => {
        location.reload();
      }, 100);
    }
  } catch (error) {
    // If an error occurs, display an error message
    showAlert('error', error.response.data.message);
  }
};
