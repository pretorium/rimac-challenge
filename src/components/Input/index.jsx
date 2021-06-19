import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    value,
    inputLabel,
    hasError,
    ...inputProps
  } = props;

  return (
    <div className={`generalInput ${hasError && 'generalInput--error'}`}>
      {value && inputLabel && (
        <p className="generalInput__label">{inputLabel}</p>
      )}
      <input
        value={value}
        {...inputProps}
      />
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  inputLabel: PropTypes.string,
  hasError: PropTypes.bool,
};

Input.defaultProps = {
  inputLabel: '',
  value: '',
  hasError: false,
};

export default Input;
