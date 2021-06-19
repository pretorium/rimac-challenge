import PropTypes from 'prop-types';
import CarData from './CarData';
import Plans from './Plans';

const routes = [
  {
    name: 'Datos del auto',
    path: '/steps/data',
    exact: true,
    component: CarData,
  },
  {
    name: 'Arma tu plan',
    path: '/steps/plans',
    exact: true,
    component: Plans,
  },
];

routes.propTypes = {
  path: PropTypes.string,
  component: PropTypes.element,
  exact: PropTypes.bool,
  protected: PropTypes.bool,
};

export default routes;
