import React from 'react';
import './Cart.css'

function Cart({ cart, updateCart }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>თქვენი კალათა</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} x{item.quantity} - ${item.price * item.quantity}
            <button onClick={() => updateCart(item.id, -1)}>წაშლა</button>
          </li>
        ))}
      </ul>
      <p>ჯამური ფასი: ${totalPrice.toFixed(2)}</p>
      <button>დასტურის გაკეთება</button>
    </div>
  );
}

export default Cart;
