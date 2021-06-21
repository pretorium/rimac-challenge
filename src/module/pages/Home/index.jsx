import React, { useState, useContext } from 'react';
import Header from 'shared/Header';
import WomanImage from 'assets/images/woman-car-big.svg';
import './styles.scss';
import Input from 'components/Input';
import Select from 'components/Select';
import { documentTypes } from 'utils/globals';
import Button from 'components/Button';
import useFetch from 'services/useFetch';
import PropTypes from 'prop-types';
import { CUSTOMER_DATA, VERIFIED, CURRENT_STEP } from 'providers/Auth/actions';
import { AuthDispatchContext, AuthDataContext } from 'providers/Auth/provider';
import validate from './validation';

function Home(props) {
  const { history } = props;
  const [typeErrors, setTypeErrors] = useState({});
  const dispatchAuth = useContext(AuthDispatchContext);
  const { customerData } = useContext(AuthDataContext);
  const { fetch: fetchSubmit, loading: loadingSubmit } = useFetch({});
  const [form, setForm] = useState({
    documentType: customerData ? customerData.documentType : 1,
    documentNumber: customerData ? customerData.documentNumber : '',
    phone: customerData ? customerData.phone : '',
    plate: customerData ? customerData.plate : '',
    terms: customerData ? customerData.terms : 1,
  });

  const handleForm = (e) => {
    const {
      name, value, type, checked,
    } = e.target;

    if (type === 'checkbox') {
      setForm({
        ...form,
        [name]: checked,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }

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
    const { isValid, errors } = await validate(form);
    if (!isValid) {
      setTypeErrors(errors);
      return;
    }

    const { documentNumber } = form;

    const config = {
      uri: `/api/users/${documentNumber.slice(-1)}`,
    };

    const response = await fetchSubmit({}, config);

    dispatchAuth({
      type: CUSTOMER_DATA, payload: { name: response.name, email: response.email, ...form },
    });
    dispatchAuth({ type: VERIFIED, payload: true });
    dispatchAuth({ type: CURRENT_STEP, payload: 0 });
    history.push('/steps/data');
  };

  return (
    <div className="generalWrapper generalWrapper--gray8">
      <div className="home container">
        <Header absolute />
        <div className="home__banner">
          <div className="banner__image">
            <img src={WomanImage} alt="girl" />
          </div>
          <div className="banner__info">
            <div className="info">
              <h4>¡NUEVO!</h4>
              <h1>
                Seguro
                {' '}
                <span>Vehicular Tracking</span>
              </h1>
              <p>Cuentanos donde le haras seguimiento a tu seguro</p>
            </div>
            <p className="info__footer">© 2020 RIMAC Seguros y Reaseguros.</p>
          </div>
        </div>
        <div className="home__auth">
          <form onSubmit={handleSubmit} className="authform" noValidate>
            <div className="authform__content">
              <h2>Déjanos tus datos</h2>
              <div className="formControl">
                <div className="formControl__selectInput">
                  <Select
                    name="documentType"
                    value={form.documentType}
                    options={documentTypes}
                    onSelect={handleForm}
                    hasError={!!typeErrors.documentNumber}
                  />
                  <Input
                    type="text"
                    inputLabel="Nro. de doc"
                    value={form.documentNumber}
                    name="documentNumber"
                    placeholder="Nro. de doc"
                    onChange={handleForm}
                    autoComplete="off"
                    onBlur={validateOnBlur}
                    hasError={!!typeErrors.documentNumber}
                  />
                </div>
                {typeErrors.documentNumber && (
                  <p className="formControl__error">{typeErrors.documentNumber}</p>
                )}
              </div>
              <div className="formControl">
                <Input
                  type="text"
                  name="phone"
                  value={form.phone}
                  inputLabel="Celular"
                  placeholder="Celular"
                  onChange={handleForm}
                  autoComplete="off"
                  onBlur={validateOnBlur}
                  hasError={!!typeErrors.phone}
                />
                {typeErrors.phone && (
                  <p className="formControl__error">{typeErrors.phone}</p>
                )}
              </div>
              <div className="formControl">
                <Input
                  type="text"
                  name="plate"
                  value={form.plate}
                  inputLabel="Placa"
                  placeholder="Placa"
                  onChange={handleForm}
                  autoComplete="off"
                  onBlur={validateOnBlur}
                  hasError={!!typeErrors.plate}
                />
                {typeErrors.plate && (
                  <p className="formControl__error">{typeErrors.plate}</p>
                )}
              </div>
              <div className="formControl">
                <div className="formControl__checkbox">
                  <input
                    name="terms"
                    className="generalCheckbox"
                    type="checkbox"
                    checked={form.terms}
                    onChange={handleForm}
                  />
                  <p className="termsAndConditions">
                    Acepto
                    {' '}
                    <a target="blank" href="https://www.rimac.com.pe/uploads/Condiciones_generales_de_contrataci%C3%B3n.pdf">
                      la Política de Protecciòn de Datos Personales
                    </a>
                    y los
                    {' '}
                    <a target="blank" href="https://www.rimac.com.pe/uploads/Condiciones_generales_de_contrataci%C3%B3n.pdf">
                      Términos y Condiciones.
                    </a>
                  </p>
                </div>
              </div>
              <Button
                type="submit"
                isLoading={loadingSubmit}
              >
                COTÍZALO
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Home;
