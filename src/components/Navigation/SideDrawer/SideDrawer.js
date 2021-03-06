import React from 'react';

import classes from './SideDrawer.css';

import Aux from '../../../hoc/Aux/Aux';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
  let attachedClasses = [classes.sideDrawer, classes.close];
  if (props.open) {
    attachedClasses = [classes.sideDrawer, classes.open];
  }

  return(
    <Aux>
      <Backdrop
        show={props.open}
        clicked={props.closed}/>
      <div
        className={attachedClasses.join(' ')}
        onClick={props.closed}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
}

export default SideDrawer;
