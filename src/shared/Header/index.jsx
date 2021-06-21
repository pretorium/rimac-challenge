import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'assets/images/logo.svg';
import Phone from 'assets/images/phone.svg';
import './styles.scss';

function Header(props) {
  const { absolute } = props;

  return (
    <header className={`header ${absolute && 'header--absolute'}`}>
      <div className="header__content">
        <img className="content__logo" src={Logo} alt="logo" />
        <div className="content__right">
          <p className="question">¿Tienes alguna duda?</p>
          <div className="phone">
            <img src={Phone} alt="phone" />
            <a className="phone__number" href="tel:0144116001">(01) 411 6001</a>
            <a className="phone__text" href="tel:0144116001">Llámanos</a>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  absolute: PropTypes.bool,
};

Header.defaultProps = {
  absolute: false,
};

export default Header;
