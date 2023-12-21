import catchAsync from '../../utils/catchAsync';
import { showAlert } from './alerts';
import axios from 'axios';
const stripe = Stripe(
  'pk_test_51OOZMBBhpjB6GUEeu7qGaNrGdPp4bTmznCwCTjemnYXUD9x93IIFsG4zFrkFIN5xwFVpaeS00lDGmpeKFufp1PT500zMumsTpU'
);

export const bookTour = async (tourId) => {
  try {
    console.log('bookin');
    const session = await axios({
      method: 'GET',
      url: `http://127.0.0.1:3000/api/v1/booking/checkout-session/${tourId}`,
    });
    console.log(session);
    await stripe.redirectToCheckout({ sessionId: session.data.session.id });
  } catch (error) {
    console.error('error', error);
  }
};
