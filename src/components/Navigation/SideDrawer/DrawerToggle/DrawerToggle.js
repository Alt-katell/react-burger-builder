import React from 'react';

import classes from './DrawerToggle.css';

const DrawerToggle = (props) => (
  <div
    onClick={props.clicked}
    className={classes.drawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
