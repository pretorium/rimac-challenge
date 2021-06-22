import React, { useState, useContext } from 'react';
import './styles.scss';
import BackButton from 'components/BackButton';
import Button from 'components/Button';
import Select from 'components/Select';
import Increaser from 'components/Increaser';
import { carBrands, carYears } from 'utils/globals';
import ArrowRight from 'assets/images/chevrot-right.svg';
import Car from 'assets/images/car.svg';
import PropTypes from 'prop-types';
import Footer from 'shared/Footer';
import { CAR_DATA, CURRENT_STEP } from 'providers/Auth/actions';
import { AuthDispatchContext, AuthDataContext } from 'providers/Auth/provider';
import validate from './validation';

function CarData(props) {
  const { location, history } = props;
  const [typeErrors, setTypeErrors] = useState({});
  const dispatchAuth = useContext(AuthDispatchContext);
  const { carData, customerData } = useContext(AuthDataContext);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    year: carData ? carData.year : '',
    brand: carData ? carData.brand : '',
    isGas: carData ? carData.isGas : 1,
    amount: carData ? carData.amount : 12500,
  });

  const handleForm = (e) => {
    const {
      name, value,
    } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    if (typeErrors[name]) {
      const nextErrors = typeErrors;
      delete nextErrors[name];
      setTypeErrors(nextErrors);
    }
  };

  const validateOnBlur = async (e) => {
    const { name } = e.target;
    const { errors } = await validate(form);
    if (errors[name]) {
      setTypeErrors({
        ...typeErrors,
        [name]: errors[name],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    const { isValid, errors } = await validate(form);
    if (!isValid) {
      setTypeErrors(errors);
      return;
    }

    setIsLoading(true);
    // Delay false for challenge
    await new Promise((resolve) => {
      setTimeout(() => {
        setIsLoading(false);
        resolve();
      }, 500);
    });

    dispatchAuth({ type: CAR_DATA, payload: form });
    dispatchAuth({ type: CURRENT_STEP, payload: 1 });
    history.push('/steps/plans');
  };

  return (
    <>
      <div className="cardData">
        <BackButton
          typw="button"
          textBeside="VOLVER"
          onClick={() => { history.push('/'); }}
        />
        <h1 className="cardData__title">
          ¡Hola,
          {' '}
          <span>{`${customerData.name.split(' ')[0]}!`}</span>
        </h1>
        <p className="cardData__subtitle">Completa los datos de tu auto</p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="formContainer">
            <div className="formContainer__control">
              <div className="control__yearSelector">
                <Select
                  name="year"
                  selectLabel="Año"
                  value={form.year}
                  options={carYears.sort((a, b) => (b.value - a.value))}
                  onSelect={handleForm}
                  placeholder="Año"
                  hasError={!!typeErrors.year}
                  onBlur={validateOnBlur}
                />
                {typeErrors.year && (
                  <p className="formControl__error">{typeErrors.year}</p>
                )}
              </div>
              <div className="control__brandSelector">
                <Select
                  name="brand"
                  selectLabel="Marca"
                  value={form.brand}
                  options={carBrands.sort()}
                  onSelect={handleForm}
                  placeholder="Marca"
                  hasError={!!typeErrors.brand}
                  onBlur={validateOnBlur}
                />
                {typeErrors.brand && (
                  <p className="formControl__error">{typeErrors.brand}</p>
                )}
              </div>
            </div>
            <div className="formContainer__control">
              <div className="helpCard">
                <h3 className="helpCard__header">AYUDA</h3>
                <div className="helpCard__body">
                  <div>
                    <p>¿No encuentras el modelo ?</p>
                    <a href={`${location.pathname}`}>CLIC AQUÍ</a>
                  </div>
                  <img src={Car} alt="car" />
                </div>
              </div>
            </div>
            <div className="formContainer__control">
              <div className="control__oilOrGasSelector">
                <p>¿Tu auto es a gas?</p>
                <div>
                  <label htmlFor="yes">
                    <input
                      name="isGas"
                      id="yes"
                      type="radio"
                      value={1}
                      onChange={handleForm}
                      className="generalRadioButton"
                      checked={Number(form.isGas) === 1}
                    />
                    Sí
                  </label>
                  <label htmlFor="no">
                    <input
                      name="isGas"
                      id="no"
                      type="radio"
                      value={0}
                      onChange={handleForm}
                      className="generalRadioButton"
                      checked={Number(form.isGas) === 0}
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="formContainer__control">
              <div className="control__amountIndicator">
                <div>
                  <p className="amountIndicator__title">Indica la suma asegurada</p>
                  <p className="amountIndicator__subtitle">
                    MIN $12,500
                    {' '}
                    <span>|</span>
                    {' '}
                    MAX $16,500
                  </p>
                </div>
                <Increaser
                  name="amount"
                  value={form.amount}
                  min={12500}
                  max={16500}
                  interval={100}
                  onChange={handleForm}
                />
              </div>
            </div>
          </div>
          <Button
            type="submit"
            isLoading={isLoading}
          >
            <p>CONTINUAR</p>
            <img src={ArrowRight} alt=">" />
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
}

CarData.propTypes = {
  location: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
  ])).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default CarData;
