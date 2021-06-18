import PropTypes from 'prop-types';
import NotFound from 'shared/NotFound';
import CarData from './CarData';
import Plans from './Plans';

const routes = [
  {
    name: 'datos-auto',
    path: '/paso/datos-auto',
    exact: true,
    component: CarData,
    isProtect: false,
  },
  {
    name: 'planes',
    path: '/paso/planes',
    exact: true,
    component: Plans,
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
