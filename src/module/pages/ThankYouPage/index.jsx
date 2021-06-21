import React, { useContext } from 'react';
import Header from 'shared/Header';
import './styles.scss';
import Button from 'components/Button';
import Footer from 'shared/Footer';
import { useHistory } from 'react-router-dom';
import { AuthDataContext } from 'providers/Auth/provider';

function ThankYouPage() {
  const { push } = useHistory();
  const { email } = useContext(AuthDataContext);

  return (
    <div className="generalWrapper">
      <Header />
      <div className="trankYouPage container">
        <div className="trankYouPage__leftContent" />
        <div className="trankYouPage__rightContent">
          <div className="rightContent">
            <h1>
              <span>¡Te damos la bienvenida!</span>
              <br />
              Cuenta con nosotros para proteger tu vehículo
            </h1>
            <p>
              Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:
              <br />
              <strong>
                {email || ''}
              </strong>
            </p>
            <Button
              onClick={() => push('/')}
            >
              cómo usar mi seguro
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ThankYouPage;
