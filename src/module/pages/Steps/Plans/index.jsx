import React, { useContext, useState, useEffect } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import BackButton from 'components/BackButton';
import { Link } from 'react-router-dom';
import People from 'assets/images/people.svg';
import { AuthDataContext } from 'providers/Auth/provider';
import { carBrands } from 'utils/globals';
import Shield from 'assets/images/shield.svg';
import Button from 'components/Button';
import Tabs from 'shared/Tabs';
import FoldingCard from 'shared/FoldingCard';
import fakeData from './tabData.json';

function Plans(props) {
  const { history } = props;
  const [tabData, setTabData] = useState([]);
  const { carData, customerData } = useContext(AuthDataContext);
  const [selectPlans, setSelectPlans] = useState([]);
  const [baseAmount, setBaseAmount] = useState(15);

  const handleCoverageSelect = ({ id, amount }) => {
    let nextSelectPlans = selectPlans;
    if (nextSelectPlans.includes(id)) {
      setBaseAmount(baseAmount - amount);
      nextSelectPlans = nextSelectPlans.filter((ele) => ele !== id);
    } else {
      setBaseAmount(baseAmount + amount);
      nextSelectPlans = [...nextSelectPlans, id];
    }
    setSelectPlans(nextSelectPlans);
  };

  const handleTabData = () => {
    const nextData = fakeData.map((tab) => (
      {
        ...tab,
        tabData: tab.tabData.map((data) => (
          <FoldingCard
            checked={selectPlans.includes(data.id)}
            data={data}
            onSelect={handleCoverageSelect}
          />
        )),
      }
    ));
    setTabData(nextData);
  };

  useEffect(() => {
    handleTabData();
    return () => handleTabData();
  }, [selectPlans]);

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
              <h5 className="carCard__plate">{`Placa: ${customerData.plate}`}</h5>
              <h3 className="carCard__brand">
                {
                  `${carBrands.find((brand) => (brand.value === carData.brand)).label} ${carData.year}`
                }
              </h3>
              <h3 className="carCard__model">Sedán</h3>
              <Link to="/steps/data">EDITAR</Link>
              <img src={People} alt="people" />
            </div>
          </div>
          <div className="contentLeft__coverages">
            <h2 className="coveragesTitle">Agrega o quita coberturas</h2>
            <Tabs
              data={tabData}
            />
          </div>
        </div>
        <div className="contentRight">
          <div className="contentRight__payment">
            <div className="payment">
              <div>
                <h2 className="payment__amount">{`$ ${baseAmount.toFixed(2)}`}</h2>
                <p>mensuales</p>
              </div>
              <img src={Shield} alt="shield" />
            </div>
            <div className="paymentList">
              <h5 className="paymentList__title">El precio incluye:</h5>
              <ul>
                <li className="paymentList__item">Llanta de respuesto</li>
                <li className="paymentList__item">Llanta de respuesto</li>
                <li className="paymentList__item">Analisis de motor</li>
              </ul>
            </div>
            <Button>
              Lo quiero
            </Button>
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
