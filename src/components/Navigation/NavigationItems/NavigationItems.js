import React from 'react';

import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
  <ul className={classes.navigationItems}>
    <NavigationItem link="/" exact>Burger Builder</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
    {props.isAuthenticated ?
      <NavigationItem link="/logout">Logout</NavigationItem> :
      <NavigationItem link="/auth">Authenticate</NavigationItem>}
  </ul>

);

export default NavigationItems;
