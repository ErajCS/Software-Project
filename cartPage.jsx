import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './cartstyle.css';

function CartPage() {
  const { cartItems, clearCart, updateQuantity, removeItem } = useCart();
  const [tip, setTip] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [cardNumber, setCardNumber] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/emptycart');
    }
  }, [cartItems, navigate]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.13;
  const deliveryFee = 100;
  const total = subtotal + tax + deliveryFee + tip;

  const orderPlace = () => {
    if (paymentMethod === 'Card' && cardNumber.trim() === '') {
      alert('Please enter your card number.');
      return;
    }
    alert("Order Placed! Maze Karo!!");
    //clearCart(); // Optional: Clear cart after placing order
  };

  return (
    <div className="cart-page">
      <main className="main-content">
        <div className="left-section">
          <div className="cart">
            <h2>HU Dukaan</h2>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.img} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <div className="product-name">{item.name}</div>
                  <div className="product-price">Price: Rs. {item.price}</div>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(index, parseInt(e.target.value, 10))}
                    min="1"
                  />
                </div>
                <button className="remove-item" onClick={() => removeItem(index)}>🗑️</button>
              </div>
            ))}
            <button className="clear" onClick={clearCart}>Clear Cart</button>
          </div>
        </div>

        <div className="right-section">
          <div className="bill-payment">
            <h3>Bill and Payment</h3>
            <div>Subtotal: Rs. {subtotal}</div>
            <div>Tax Applied: Rs. {tax.toFixed(2)}</div>
            <div>Delivery Fee: Rs. {deliveryFee}</div>

            <label>
              Tip Your Rider:
              <input
                type="number"
                value={tip}
                onChange={(e) => setTip(parseInt(e.target.value, 10) || 0)}
              />
            </label>

            <div>Total: Rs. {total.toFixed(2)}</div>

            <label>Delivery Address: <input></input></label>
            {/* You can replace this with a real address input later */}

            <div>
              <label>Payment Method:</label>
              <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="Card">Card</option>
                <option value="Cash">Cash</option>
              </select>
            </div>

            {/* Conditionally show card number field */}
            {paymentMethod === 'Card' && (
              <div>
                <label>Card Number:</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="Enter card number"
                />
              </div>
            )}

            <button onClick={orderPlace}>Confirm Order</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CartPage;
