import React from 'react';

import classes from './Input.css';

const Input = (props) => {
  let inputElement = null;
  let inputClasses = [classes.inputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.invalid);
  }

  let validationError = null;
  if (props.invalid && props.touched) {
      validationError = <p className={classes.errorMessage}>Please enter a valid information.</p>;
  }

  switch (props.elementType) {
    case ('input'):
      inputElement = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
      break;
    case ('textarea'):
      inputElement = <textarea
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
      break;
    case ('select'):
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}>
            {props.elementConfig.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            ))}
        </select>
      );
      break;
    default:
      inputElement = <input
        className={classes.inputElement}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
      break;
  }

  return (
    <div className={classes.input}>
      <label className={classes.label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default Input
