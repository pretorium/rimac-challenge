import React, { useState } from 'react';
import Header from 'shared/Header';
import WomanImage from 'assets/images/woman-car-big.svg';
import './styles.scss';
import Input from 'components/Input';
import Select from 'components/Select';
import { documentTypes } from 'utils/globals';

function Home() {
  const [form, setForm] = useState({
    documentType: 1,
    documentNumber: '',
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
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
        <form className="authform">
          <div className="authform__content">
            <h2>Déjanos tus datos</h2>
            <div className="formControl">
              <div className="formControl__selectInput">
                <Select
                  name="documentType"
                  value={form.documentType}
                  options={documentTypes}
                  onSelect={handleForm}
                />
                <Input
                  type="text"
                  inputLabel="Nro. de doc"
                  value={form.documentNumber}
                  name="documentNumber"
                  placeholder="Nro. de doc"
                  onChange={handleForm}
                />
              </div>
            </div>
            <div className="formControl">
              <Input
                name="phone"
                value={form.phone}
                inputLabel="Celular"
                placeholder="Celular"
              />
            </div>
            <div className="formControl">
              <Input
                hasError
                placeholder="Placa"
              />
            </div>
            <div className="formControl">
              <Select
                name="select1"
                value="1"
                hasError
                selectLabel="hola"
                options={Array(10).fill(10).map((e, i) => ({
                  label: `Label ${i}`,
                  value: `${i}`,
                }))}
              />
            </div>
            <div className="formControl">
              <input className="generalCheckbox" type="checkbox" />
            </div>
            <Select
              name="select2"
              value="1"
              hasError
              selectLabel="hola"
              options={Array(10).fill(10).map((e, i) => ({
                label: `Label ${i}`,
                value: `${i}`,
              }))}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
