/* eslint-disable react/require-default-props */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthDataContext } from 'providers/Auth/provider';
import { Route, useHistory, Redirect } from 'react-router-dom';
import ListenerProvider from './ListenerProvider';

const RouterOutlet = (route) => {
  const { path, isProtect } = route;
  const history = useHistory();
  const auth = useContext(AuthDataContext);

  const render = (props) => {
    history.listen(() => {
      if (document && document.top !== false) {
        window.scrollTo(0, 0);
      }
    });

    const component = (
      <route.component
        {...props}
        routes={route.routes}
        config={route}
      />
    );

    return component;
  };

  const routeProps = {
    path,
    render,
  };

  if (isProtect && !auth.isVerified) {
    return <Redirect to="/" />;
  }

  return <Route {...routeProps} />;
};

RouterOutlet.propTypes = {
  route: PropTypes.objectOf(PropTypes.object),
};

export default ListenerProvider()(RouterOutlet);
