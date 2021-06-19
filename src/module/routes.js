import PropTypes from 'prop-types';
import NotFound from 'shared/NotFound';
import Home from './pages/Home';
import Steps from './pages/Steps';
import ThankYouPage from './pages/ThankYouPage';

const routes = [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Home,
    isProtect: false,
  },
  {
    name: 'paso',
    path: '/steps',
    exact: false,
    component: Steps,
    isProtect: false,
  },
  {
    name: 'thank-you-page',
    path: '/thanks',
    exact: true,
    component: ThankYouPage,
    isProtect: false,
  },
  {
    name: '404',
    path: '**',
    component: NotFound,
  },
];

routes.propTypes = {
  path: PropTypes.string,
  component: PropTypes.element,
  exact: PropTypes.bool,
  protected: PropTypes.bool,
};

export default routes;
