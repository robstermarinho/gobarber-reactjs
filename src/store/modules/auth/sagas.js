import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';
import { signInSuccess } from './actions';
import history from '~/services/history';

// SIGN_IN_REQUEST
export function* signIn({ payload }) {
  const { email, password } = payload;

  // Call to return a promisse
  // First parameter the api.post function
  // Second parameter the URL
  // Third parameter the data to be sent

  try {
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      console.tron.error('The user is not a PROVIDER.');
      return;
    }
    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (error) {
    console.tron.error(error);
  }
}
// Triggered by reducer actions
export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
