import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { getCookie } from 'utils/cookie';
import AuthReducer from './reducer';

export const InitialState = {
  ...(getCookie('auth') ? JSON.parse(getCookie('auth')) : {
    isLoggedIn: false,
  }),
};

export const AuthDataContext = createContext(InitialState);
export const AuthDispatchContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [AuthData, AuthDispatch] = useReducer(AuthReducer, InitialState);
  return (
    <AuthDispatchContext.Provider value={AuthDispatch}>
      <AuthDataContext.Provider value={AuthData}>
        {children}
      </AuthDataContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
