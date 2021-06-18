/* eslint-disable import/no-named-as-default-member */
import ACTIONS from './actions';

function AuthReducer(state, action) {
  switch (action.type) {
    case ACTIONS.AUTH_LOGIN:
      return { ...state, ...action.payload };
    case ACTIONS.AUTH_LOGOUT:
      return {
        isLoggedIn: false,
      };
    default:
      throw new Error();
  }
}

export default AuthReducer;
