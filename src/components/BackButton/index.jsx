import React from 'react';
import PropTypes from 'prop-types';
import ChevrotRed from 'assets/images/chevrot-red.svg';
import ChevrotGray from 'assets/images/chevrot-gray.svg';
import './styles.scss';

function BackButton(props) {
  const { textBeside, ...buttonProps } = props;

  return (
    <div className="buttonContainer">
      <button
        type="button"
        {...buttonProps}
        className="buttonContainer__button"
      >
        <img src={buttonProps.disabled ? ChevrotGray : ChevrotRed} alt="<" />
      </button>
      {textBeside && (
        <p className="buttonContainer__text">{textBeside}</p>
      )}
    </div>
  );
}

BackButton.propTypes = {
  textBeside: PropTypes.string,
};

BackButton.defaultProps = {
  textBeside: '',
};

export default BackButton;
