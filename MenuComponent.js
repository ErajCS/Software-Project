import React from 'react';
import { useNavigate } from 'react-router-dom';
import './menustyle.css';

const MenuComponent = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      category: "Stationery",
      color: "pink",
      items: [
        { name: "Pen", price: "50", img: "./pen.jpg" },
        { name: "Eraser", price: "15", img: "./eraser.png" },
        { name: "Pencil", price: "20", img: "./pencil.jpg" },
        { name: "Sharpener", price: "15", img: "./sharpener.jpg" },
        { name: "Ruler", price: "25", img: "./ruler.png" },
        { name: "Spiral Notebook", price: "400", img: "./spiral.png" },
        { name: "Writing Pad ", price: "300", img: "./writing.png" },
      ]
    },
    {
      category: "Snacks",
      color: "brown",
      items: [
        { name: "Granola bar", price: "200", img: "./granola.png" },
        { name: "Chips", price: "50", img: "./chips.png" },
        { name: "Biscuit", price: "20", img: "./biscuit.png" },
        { name: "Instant Noodles", price: "300", img: "./noodles.png" },
        { name: "Chocolate", price: "120", img: "./chocolate.png" },
      ]
    },
    {
      category: "Merchandise",
      color: "purple",
      items: [
        { name: "Hoodie", price: "300", img: "./hoodie.png" },
        { name: "Water bottle", price: "320", img: "./bottle.png" },
        { name: "Mug", price: "200", img: "./mug.png" },
        { name: "Bag", price: "1200", img: "./bag.png" },
      ]
    },
    {
      category: "Textbooks",
      color: "green",
      items: [
        { name: "Novel", price: "220", img: "./novel.png" },
        { name: "Mathematics", price: "700", img: "./maths.png" },
        { name: "Literature", price: "650", img: "./literature.jpg" },
        { name: "Economics", price: "720", img: "./economics.png" },
        { name: "Computer Science", price: "1000", img: "./computer.png" },
      ]
    }
  ];

  const handleCategoryClick = (section) => {
    navigate('/CategoryItems', { state: section });
  };

  return (
    <div className="menu-category-container">
      <h1 className="menu-main-title">Shop By Category</h1>
      <div className="category-grid">
        {menuItems.map((section, index) => (
          <div
            key={index}
            className={`category-card ${section.color}`}
            onClick={() => handleCategoryClick(section)}
          >
            <h2>{section.category}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
