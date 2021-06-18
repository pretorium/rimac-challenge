import React from 'react';
import { Switch } from 'react-router-dom';
import RouterOutlet from 'shared/RouterOutlet';
import Header from 'shared/Header';
import routes from './routes';
import './styles.scss';

function Steps() {
  return (
    <>
      <Header />
      <div className="layout container">
        <div className="layout__stepCounter">
          steps
        </div>
        <div className="layout__content">
          <Switch>
            {routes.map((route) => (
              <RouterOutlet key={route.name} {...route} />
            ))}
          </Switch>
        </div>
      </div>
    </>
  );
}

export default Steps;
