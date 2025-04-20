
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './menustyle.css'; // reuse same style

const CategoryItems = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { category, items, color } = location.state || {};

  if (!category || !items) {
    return <p>Invalid category. Please go back to menu.</p>;
  }

  const handleItemClick = (item) => {
    navigate('/ItemModal', { state: { item } });
  };

  return (
    <div className="category-items-page">
      <h2 className={`section-title ${color}`}>{category}</h2>
      <div className="menu-items">
        {items.map((item, idx) => (
          <div key={idx} className="item" onClick={() => handleItemClick(item)}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">Rs. {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;
