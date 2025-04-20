import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ItemModal.css';
import { useCart } from './CartContext';

const ItemModal = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSize, setSelectedSize] = useState('M');

  const basePrice = parseFloat(item?.price) || 0;
  const itemTotalPrice = basePrice * quantity;

  const isPen = item?.name?.toLowerCase().includes('pen');
  const isHoodie = item?.name?.toLowerCase().includes('hoodie');

  const handleAddToCart = () => {
    if (quantity < 1) {
      alert('Please select a valid quantity.');
      return;
    }

    const itemWithExtras = {
      ...item,
      price: itemTotalPrice,
      quantity,
    };

    if (isPen) itemWithExtras.color = selectedColor;
    if (isHoodie) itemWithExtras.size = selectedSize;

    addToCart(itemWithExtras, quantity);
    alert(`Added to cart: Total Price Rs. ${itemTotalPrice}`);
    navigate(`/Menu`);
  };

  const handleClose = () => {
    navigate(`/Menu`);
  };

  if (!item) {
    return <div>Error: Item data is missing.</div>;
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h5>{item.name}</h5>
          <button className="close" onClick={handleClose}>X</button>
        </div>
        <div className="modal-body">
          <div className="modal-image">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="modal-details">
            <p>{item.description || 'No description available.'}</p>

            {/* Only show color if item is a pen */}
            {isPen && (
              <div className="form-group">
                <label>Select Color</label>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  <option value="blue">Blue</option>
                  <option value="black">Black</option>
                </select>
              </div>
            )}

            {/* Only show size if item is a hoodie */}
            {isHoodie && (
              <div className="form-group">
                <label>Select Size</label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option value="S">Small (S)</option>
                  <option value="M">Medium (M)</option>
                  <option value="L">Large (L)</option>
                  <option value="XL">Extra Large (XL)</option>
                </select>
              </div>
            )}

            {/* Always show quantity */}
            <div className="form-group">
              <label>Quantity</label>
              <input
                type="number"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              />
            </div>

            <p>Total Price: Rs. {itemTotalPrice}</p>
            <button className="btn-add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
