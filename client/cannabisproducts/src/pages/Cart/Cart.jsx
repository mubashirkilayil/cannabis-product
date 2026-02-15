import { useEffect, useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  const removeItem = index => {
    const updated = cartItems.filter((_, i) => i !== index);
    localStorage.setItem('cart', JSON.stringify(updated));
    setCartItems(updated);
  };
  console.log(cartItems);
  const totalCartAmount = cartItems => {
    var totalAmount = 0;
    for (var i = 0; i < cartItems.length; i++) {
      totalAmount = totalAmount + cartItems[i].price;
    }
    return totalAmount;
  };

  return (
    <div className="shop-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item, idx) => (
          <div className="cart-item" key={idx}>
            <img src={item.image} alt={item.title} />
            <div>
              <p>{item.title}</p>
              <p>$ {item.price}</p>
            </div>
            <div className="btn-group">
              <button
                className="remove-item-btn"
                onClick={() => removeItem(idx)}
              >
                Remove
              </button>
              <button className="buy-now-btn" onClick={() => removeItem(idx)}>
                Buy Now
              </button>
            </div>
          </div>
        ))
      )}
      <div className="bill">
        <p>Total Number of Items : {cartItems.length}</p>
        <p>Total Cart Amount : $ {totalCartAmount(cartItems)}</p>
      </div>
      <button className="pay-btn">Proceed to buy</button>
    </div>
  );
};

export default Cart;
