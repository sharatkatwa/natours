/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51M94FBSD7KeBVm8KcFoRTq2x3fBcsg4a2V1GJddNCpd7jGPyunNzvcg6rT0u4ri0rYGC43msc31ALAUIe2b7SAvv00voaWv1b3'
  );
  try {
    // 1) Get the checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
