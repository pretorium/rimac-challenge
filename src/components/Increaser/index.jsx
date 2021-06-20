import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Less from 'assets/images/less.svg';
import Plus from 'assets/images/plus.svg';

function Increaser(props) {
  const {
    name,
    value,
    interval,
    max,
    min,
    onChange,
  } = props;
  const [amount, setAmount] = useState(value);

  const handleAmount = (acction) => {
    const handleOnChange = (nextAmount) => {
      onChange({
        target: {
          value: nextAmount,
          name,
        },
      });
    };

    if (acction === 'increase' && amount < max) {
      setAmount(amount + interval);
      handleOnChange(amount + interval);
    } else if (acction === 'decrease' && amount > min) {
      setAmount(amount - interval);
      handleOnChange(amount + interval);
    }
  };

  return (
    <div className="increaser">
      <button
        type="button"
        onClick={() => handleAmount('decrease')}
        className="increaser__less"
      >
        <img src={Less} alt="-" />
      </button>
      {`$ ${amount.toLocaleString('en-US')}`}
      <button
        type="button"
        className="increaser__more"
        onClick={() => handleAmount('increase')}
      >
        <img src={Plus} alt="+" />
      </button>
    </div>
  );
}

Increaser.propTypes = {
  value: PropTypes.number,
  interval: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Increaser.defaultProps = {
  value: 0,
  interval: 100,
  max: 10000,
  min: 100,
  name: 'increaser',
  onChange: () => {},
};

export default Increaser;
