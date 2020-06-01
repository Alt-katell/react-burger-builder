import React from 'react';

import burgerLogo from '../../assets/images/burger_logo.png';

import classes from './Logo.css';

const Logo = (props) => (
  <div className={classes.logo}>
    <img src={burgerLogo} alt="Ny Burger"/>
  </div>
);

export default Logo
