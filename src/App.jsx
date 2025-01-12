import React, { useState, useEffect } from 'react';
import Dessert from './components/Dessert';
import Cart from './components/Cart';
import './App.css';

// აქ ვქმნი 2 სტეიტს
function App() {
  const [desserts, setDesserts] = useState([]);
  const [cart, setCart] = useState([]);

// აქ ფეჩს ვუკეთებ დათა ჯეისონიდან
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setDesserts(data));
  }, []);

  // დათა ჯეისონში აიდები დავამატე  და ვაკეთებ ვმაპავ თუ აითემი იქნება დესერტი აითემს ამოვაარქივებ და დავუმატებ 1ს  თუარადა დესერტს ამოვაარქივებ და დავუწერ 1ს
  const addToCart = (dessert) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === dessert.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === dessert.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...dessert, quantity: 1 }];
      }
    });
  };


  const updateCart = (id, change) => {
    setCart((prevCart) => {
      return prevCart
        .map(item => (item.id === id ? { ...item, quantity: item.quantity + change } : item))
        .filter(item => item.quantity > 0);
    });
  };

  return (
    <div className="container">
      <h1>დესერტები</h1>
      <div className="dessert-list">
        {desserts.map(dessert => (
          <Dessert
            key={dessert.id}
            dessert={dessert}
            inCart={cart.some(item => item.id === dessert.id)}
            addToCart={addToCart}
            updateCart={updateCart}
          />
        ))}
      </div>
      <Cart cart={cart} updateCart={updateCart} />
    </div>
  );
}

export default App;
