import React from 'react';

import classes from './Order.css';

const Order = (props) => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    })
  }

  const ingredientOutput = ingredients.map(ingredient => {
    return <span
      key={ingredient.name}
      className={classes.ingredientBox}>
      {ingredient.name} ({ingredient.amount})
    </span>;
  });

  return (
    <div className={classes.order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>CAD {props.price.toFixed(2)}</strong></p>
    </div>
  );
};

export default Order;
