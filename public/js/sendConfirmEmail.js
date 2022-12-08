/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const sendConfirmEmail = async () => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/sendConfirmEmail',
      data: {},
    });

    if (res.data.status === 'success') {
      showAlert(
        'success',
        'Please check your email,the confirmation email sent successfully!'
      );
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
