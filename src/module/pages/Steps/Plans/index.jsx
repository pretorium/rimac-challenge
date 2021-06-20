import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import BackButton from 'components/BackButton';
import { Link } from 'react-router-dom';
import People from 'assets/images/people.svg';

function Plans(props) {
  const { history } = props;

  return (
    <div className="plansContainer">
      <BackButton
        typw="button"
        textBeside="VOLVER"
        onClick={() => { history.push('/steps/data'); }}
      />
      <h1 className="plansContainer__title">
        Mira las coberturas
      </h1>
      <p className="plansContainer__subtitle">Conoce las coberturas para tu plan</p>
      <div className="plansContainer__content">
        <div className="contentLeft">
          <div className="contentLeft__banner">
            <div className="carCard">
              <h5 className="carCard__plate">Placa: C2U-114</h5>
              <h3 className="carCard__brand">Wolkswagen 2019</h3>
              <h3 className="carCard__model">Golf</h3>
              <Link to="/steps/data">EDITAR</Link>
              <img src={People} alt="people" />
            </div>
          </div>
        </div>
        <div className="contentRight">
          <div className="contentRight__Payment">
            payment
          </div>
        </div>
      </div>
    </div>
  );
}

Plans.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Plans;
