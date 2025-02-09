import React, { useState } from 'react'
import Products from './products'
import Cart from './cart'

function Layout() {
  console.log(`Layout component..`);
    const [cart, setCart] = useState([]);
    const addToCart = (item) => {
      console.log(`addToCart function..`);
        setCart([...cart, item]);
    }
    const removeFromCart = (item) => {
      console.log(`removeFromCart function..`);
        setCart(cart.pop(item));
    };
  return (
    <>
   <Products addToCart={addToCart}/>
   <Cart cart={cart} removeFromCart={removeFromCart}/>
   </>
  )
}

export default Layout;