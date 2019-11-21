import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';
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
      toast.error('The user is not a PROVIDER.');
      return;
    }

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (error) {
    toast.error('Invalid email and password.');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    history.push('/');
  } catch (err) {
    toast.error('Invalid data.');
    yield put(signFailure());
  }
}

/**
 * This function will be listening to the 'persist/REHYDRATE' action and
 * know if the token has been set in the redux again.
 * If yes it will include the token in all the requests.
 */

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

// Triggered by reducer actions
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
