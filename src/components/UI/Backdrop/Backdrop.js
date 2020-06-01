import React from 'react';

import classes from './Backdrop.css';

const Backdrop = (props) => (
  props.show ? <div className={classes.backdrop} onClick={props.clicked}></div> : null
);

export default Backdrop;
