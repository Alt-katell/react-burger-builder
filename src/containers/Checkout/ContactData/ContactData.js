import React, {Component} from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true})

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Kat Goaër',
        address: {
          street: 'Futur street 1',
          zipCode: 'H4H 2M2',
          country: 'Canada'
        },
        email: 'email@email.com'
      },
      deliveryMethod: 'fastest'
    }

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false});
      })
  }

  render() {
    let form = (
      <form>
        <input className={classes.input} type="text" name="name" placeholder="Your name" />
        <input className={classes.input} type="email" name="email" placeholder="Your email" />
        <input className={classes.input} type="text" name="street" placeholder="Your street" />
        <input className={classes.input} type="text" name="postal" placeholder="Your postal code" />
        <Button btnType="success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.contactData}>
        <h4>Enter your contact info</h4>
        {form}
      </div>
    );
  }

}

export default ContactData;
