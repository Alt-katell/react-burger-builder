import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
  return (
    <div className={classes.checkoutSummary}>
      <h2>We hope it tastes good!</h2>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button
        btnType="danger"
        clicked={props.checkoutCancelled}>CANCEL</Button>
      <Button
        btnType="success"
        clicked={props.checkoutContinued}>CONTINUE</Button>
    </div>
  );
}

export default CheckoutSummary;
