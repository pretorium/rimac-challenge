import React from 'react';
import { Switch } from 'react-router-dom';
import RouterOutlet from 'shared/RouterOutlet';
import routes from './routes';

function Module() {
  return (
    <Switch>
      {routes.map((route) => (
        <RouterOutlet key={route.name} {...route} />
      ))}
    </Switch>
  );
}

export default Module;
