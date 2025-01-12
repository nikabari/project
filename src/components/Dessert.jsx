import React from 'react';
import './dessert.css'
function Dessert({ dessert, inCart, addToCart, updateCart }) {
    console.log(inCart);
    
  return (
    <div className={`dessert-item ${inCart ? 'in-cart' : ''}`}>
      <img src={dessert.image} alt={dessert.name} />
      <h2>{dessert.name}</h2>
      <p>${dessert.price.toFixed(2)}</p>
      {inCart ? (
        <div className="quantity-controls">
          <button onClick={() => updateCart(dessert.id, -1)}>-</button>
          <span>{inCart.quantity}</span>
          <button onClick={() => updateCart(dessert.id, 1)}>+</button>
        </div>
      ) : (
        <button className="add-to-cart" onClick={() => addToCart(dessert)}>
          კალათაში დამატება
        </button>
      )}
    </div>
  );
}

export default Dessert;
