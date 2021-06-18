import PropTypes from 'prop-types';
import NotFound from 'shared/NotFound';
import Home from './pages/Home';
import CarData from './pages/CarData';
import Plans from './pages/Plans';
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
    name: 'datos-auto',
    path: '/datos-auto',
    exact: true,
    component: CarData,
    isProtect: false,
  },
  {
    name: 'planes',
    path: '/planes',
    exact: true,
    component: Plans,
    isProtect: false,
  },
  {
    name: 'thank-you-page',
    path: '/gracias',
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
