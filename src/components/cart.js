import React from 'react'

function Cart({ cart, removeFromCart }) {
    console.log(`Cart component..`);
    return (
        <section>
            <h4>Cart</h4>
            <div className='products'>
                {cart.map((product, index) => (
                    <div className='product-card' key={index}>
                        <img src={product.image} className='product-image' alt={product.image} height='150' width='150' />
                        <span className='product-name'>{product.name}</span>
                        <span className='product-category'>{product.category}</span>
                        <span className='product-price'>Price: ${product.price}</span>
                        <button className='btn-cart' onClick={() => removeFromCart(product)}>Remove</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Cart