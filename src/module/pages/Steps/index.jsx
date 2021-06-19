import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RouterOutlet from 'shared/RouterOutlet';
import Header from 'shared/Header';
import NotFound from 'shared/NotFound';
import StepsComponent from 'shared/StepCounter';
import routes from './routes';

import './styles.scss';

function Steps() {
  const stepList = routes.map(({ name, path }) => ({ name, path }));

  return (
    <>
      <Header />
      <div className="layout container">
        <div className="layout__stepCounter">
          <StepsComponent steps={stepList} />
        </div>
        <div className="layout__content">
          <Switch>
            {routes.map((route) => (
              <RouterOutlet key={route.name} {...route} />
            ))}
            <Route path="/**" component={NotFound} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default Steps;
