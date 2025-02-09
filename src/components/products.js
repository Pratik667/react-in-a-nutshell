import React from 'react'

function products({addToCart}) {
  console.log(`products component..`);
    const product = [
        {
          "name": "Pepsi",
          "category": "Coldrink, Soft drink",
          "price": 10,
          "image": "https://s.alicdn.com/@sc04/kf/U2e0947554b884d009ba8e5bd630d39a5O.jpg_720x720q50.jpg",
          "height": 150,
          "width": 150
        },
        {
          "name": "Seven Up",
          "category": "Coldrink, Soft drink",
          "price": 10,
          "image": "https://s.alicdn.com/@sc04/kf/U04313c1e28094cbe9ba2e8eb1caa372fs.jpg_720x720q50.jpg",
          "height": 150,
          "width": 150
        },
        {
          "name": "Dr Pepper Diet",
          "category": "Coldrink, Soft drink",
          "price": 12,
          "image": "https://s.alicdn.com/@sc04/kf/Hbeee0fbf879a418c9ad211a904fce642A.jpg_720x720q50.jpg",
          "height": 150,
          "width": 150
        },
        {
          "name": "Fanta",
          "category": "Coldrink, Soft drink",
          "price": 8,
          "image": "https://s.alicdn.com/@sc04/kf/U1831688a090b4dd6ae17f5f7ad5ae2baZ.jpg_720x720q50.jpg",
          "height": 150,
          "width": 150
        }
      ];

    
  return (
    <section className='products'>
        {product.map((product, index) => (
        <div className='product-card' key={index}>
            <img src={product.image} alt={product.image} className='product-image' height='150' width='150' />
            <span className='product-name'>{product.name}</span>
            <span className='product-category'>{product.category}</span>
            <span className='product-price'>Price: ${product.price}</span>
            <button className='btn-cart' onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
        ))}
    </section>
  )
}

export default products