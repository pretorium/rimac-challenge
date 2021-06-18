import React from 'react';
import { Switch } from 'react-router-dom';
import RouterOutlet from 'shared/RouterOutlet';
import Header from 'shared/Header';
import routes from './routes';

function Steps() {
  return (
    <div>
      <Header />
      <Switch>
        {routes.map((route) => (
          <RouterOutlet key={route.name} {...route} />
        ))}
      </Switch>
    </div>
  );
}

export default Steps;
