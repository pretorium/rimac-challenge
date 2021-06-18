import React from 'react';
import { Switch } from 'react-router-dom';
import RouterOutlet from 'shared/RouterOutlet';
import routes from './routes';

function Module() {
  return (
    <div>
      <Switch>
        {routes.map((route) => (
          <RouterOutlet key={route.name} {...route} />
        ))}
      </Switch>
    </div>
  );
}

export default Module;
