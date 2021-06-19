import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import BackButton from 'components/BackButton';
import './styles.scss';

function StepCounter(props) {
  const { steps } = props;
  const { pathname } = useLocation();
  const currentStep = steps.findIndex((step) => step.path === pathname) + 1;

  return (
    <div className="stepsContainer">
      <div className="stepsContainer__list">
        <div className="dashedLine" />
        {steps.map(({ name, path }, idx) => (
          <div key={name} className="step">
            <NavLink className="step__number" activeClassName="step__number--active" to={path}>{idx + 1}</NavLink>
            <p className="step__name">{name}</p>
          </div>
        ))}
      </div>
      <div className="stepsContainer__bar">
        <BackButton
          disabled={pathname === steps[0].path}
        />
        <p className="currentStep">
          {`PASO ${currentStep} DE ${steps.length}`}
        </p>
        <div className="progress">
          <div className="progress__bar" style={{ width: `${(currentStep / steps.length) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}

StepCounter.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  })),
};

StepCounter.defaultProps = {
  steps: [
    { name: 'Step 1', path: '/' },
    { name: 'Step 2', path: '/' },
  ],
};

export default StepCounter;
