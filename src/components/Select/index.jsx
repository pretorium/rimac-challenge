import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Arrow from 'assets/images/chevrot-down.svg';

function Select(props) {
  const {
    name,
    options,
    value,
    placeholder,
    onSelect,
    selectLabel,
    hasError,
    onBlur,
  } = props;
  const selectRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClickOption = (e) => {
    if (e.target === selectRef.current || e.target.className === `selectArrow__${name}`) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (selectRef && selectRef.current) {
      document.addEventListener('click', handleOnClickOption);
    }

    return () => {
      document.removeEventListener('click', handleOnClickOption);
    };
  }, [isOpen]);

  const handleOnClick = (selectName, optionValue) => {
    onSelect({
      target: {
        name: selectName,
        value: optionValue,
      },
    });
  };

  return (
    <div className={`generalSelect ${!selectLabel && 'generalSelect--noLabel'} ${hasError && 'generalSelect--error'}`}>
      {value && selectLabel && (
        <p className="generalSelect__label">{selectLabel}</p>
      )}
      <input
        name={name}
        type="text"
        readOnly
        value={
          options.filter((e) => (e.value === value))[0]
            ? options.filter((e) => (e.value === value))[0].label
            : ''
        }
        ref={selectRef}
        onBlur={onBlur}
        className="generalSelect__select"
        placeholder={placeholder}
      />
      {isOpen && (
        <div className="generalSelect__list">
          {options.map((option, idx) => (
            <div
              role="button"
              className="option"
              key={`option-${idx}`}
              aria-hidden="true"
              onClick={() => handleOnClick(name, option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      <div
        role="button"
        aria-hidden="true"
        className={`generalSelect__arrow ${isOpen && 'generalSelect__arrow--up'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img className={`selectArrow__${name}`} src={Arrow} alt=">" />
      </div>
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  })),
  onSelect: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  selectLabel: PropTypes.string,
  hasError: PropTypes.bool,
  onBlur: PropTypes.func,
};

Select.defaultProps = {
  options: Array(10).fill(10).map((e, i) => ({
    label: `Value ${i + 0}`,
    value: i,
  })),
  placeholder: 'Placeholder',
  value: '',
  name: 'select',
  // eslint-disable-next-line no-console
  onSelect: (op) => console.log(op),
  selectLabel: '',
  hasError: false,
  onBlur: () => {},
};

export default Select;
