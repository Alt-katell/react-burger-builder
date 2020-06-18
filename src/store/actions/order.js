import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgeSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgeFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

export const purchaseBurgerStart = (orderData) => {
  return dispatch => {
    axios.post('/orders.json', orderData)
      .then(response => {
        dispatch(purchaseBurgeSuccess(response.data, orderData))
      })
      .catch(error => {
        dispatch(purchaseBurgeFail(error))
      })
  }
}
