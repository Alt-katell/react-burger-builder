import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';

import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }

  render() {
    return (
      <div className={classes.contactData}>
        <h4>Enter your contact info</h4>
        <form>
          <input className={classes.input} type="text" name="name" placeholder="Your name" />
          <input className={classes.input} type="email" name="email" placeholder="Your email" />
          <input className={classes.input} type="text" name="street" placeholder="Your street" />
          <input className={classes.input} type="text" name="postal" placeholder="Your postal code" />
          <Button btnType="success">ORDER</Button>
        </form>
      </div>
    );
  }

}

export default ContactData;
