import React from 'react';

import classes from './BuildControl.css';

const BuildControl = (props) => (
  <div className={classes.buildControl}>
    <div className={classes.label}>{props.label}</div>
    <button className={classes.less} onClick={props.removed}>Less</button>
    <button className={classes.more} onClick={props.added}>More</button>
  </div>
);

export default BuildControl;
