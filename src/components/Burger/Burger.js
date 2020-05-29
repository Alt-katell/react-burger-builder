import React from 'react';

import classes from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
  let ingredientList = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])]  //created one space in this new array every time it found ingredientKey in the props.ingredients object
      .map((_, i) => {
        return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
      });
    });

  return (
    <div className={classes.burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientList}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger;
