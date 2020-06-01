import React from 'react';

import classes from './Modal.css';

const Modal = (props) => (
  <div className={classes.modal}>
    {props.children}
  </div>
);

export default Modal;
