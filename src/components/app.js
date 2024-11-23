// Simple cart implementation

let cart = [];

// Add item to the cart
function addToCart(productName, price) {
    const item = {
        name: productName,
        price: price
    };

    // Add the item to the cart
    cart.push(item);
    
    // Update the cart display
    updateCartDisplay();
}

// Update the cart display (items and total price)
function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items-list');
    const totalPriceElement = document.getElementById('total-price');

    // Clear previous cart display
    cartItemsList.innerHTML = '';

    // Add each item in the cart to the list
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });

    // Update the total price
    totalPriceElement.textContent = total;
}

// Checkout functionality
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert(`Checkout successful! Total price: $${document.getElementById('total-price').textContent}`);
        // Empty the cart after checkout
        cart = [];
        updateCartDisplay();
    }
}
