import catchAsync from '../../utils/catchAsync';
import { showAlert } from './alerts';
import axios from 'axios';
const stripe = Stripe(
  'pk_test_51OOZMBBhpjB6GUEeu7qGaNrGdPp4bTmznCwCTjemnYXUD9x93IIFsG4zFrkFIN5xwFVpaeS00lDGmpeKFufp1PT500zMumsTpU'
);

/**
 * Book a tour by retrieving a checkout session and redirecting to checkout.
 * @param {string} tourId - The ID of the tour to book.
 */
export const bookTour = async (tourId) => {
  try {
    // Retrieve the checkout session for the given tour ID
    const session = await axios({
      method: 'GET',
      url: `http://127.0.0.1:3000/api/v1/booking/checkout-session/${tourId}`,
    });

    // Redirect to the checkout page using the session ID
    await stripe.redirectToCheckout({ sessionId: session.data.session.id });
  } catch (error) {
    // Handle any errors that occur during the booking process
    console.error('error', error);
  }
};
