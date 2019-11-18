import produce from 'immer';

// Put a initial state in a variable
const INITIAL_STATE = {
  token: null,
  signed: false,
  loadgin: false,
};

// Declare the auth reducer
export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
      });
    default:
      return state;
  }
}
