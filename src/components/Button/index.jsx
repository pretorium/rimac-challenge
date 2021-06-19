import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

function Button(props) {
  const { children, isLoading, ...buttonProps } = props;

  return (
    <button
      className="generalButton"
      type="button"
      {...buttonProps}
    >
      {isLoading ? (
        <div className="loader" />
      ) : (
        children
      )}
    </button>
  );
}

Button.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  isLoading: false,
};

export default Button;
