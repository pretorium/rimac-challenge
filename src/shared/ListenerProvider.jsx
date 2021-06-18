import React, { useContext, useEffect } from 'react';
import { AuthDataContext } from 'providers/Auth/provider';
import { setCookie, getCookie } from 'utils/cookie';

/**
 * HOC que permite almacenar en la Cookie la data
 * referente a la orden del usuario
 */
const ListenerProvider = () => (Component) => (props) => {
  const auth = useContext(AuthDataContext);

  useEffect(() => {
    if (JSON.stringify(auth) !== JSON.stringify(getCookie('auth'))) {
      setCookie('auth', JSON.stringify({ ...auth }), 14400000);
    }
  }, [auth]);

  return <Component {...props} />;
};

export default ListenerProvider;
