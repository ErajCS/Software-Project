import React from "react";
import {useNavigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer'

import "./menustyle.css";

const MenuComponent = () => {
 // const [searchQuery, setSearchQuery] = useState("");

 //hook used for navigating ot other screen
  const navigate = useNavigate();

//array of all the items 
const menuItems = [
  { 
    category: "Stationery",
    color: "pink", 
    items: [
      { name: "Pen", price: "50", img: "./pen.jpg", description: "Scoop of rich and decadent chocolate ice cream" }, 
      { name: "Eraser", price: "15", img: "./eraser.png", description: "Scoop of smooth and silky blueberry ice cream" },
      { name: "Pencil", price: "20", img: "./pencil.jpg", description: "Scoop of smooth and silky blueberry ice cream" },
      { name: "Sharpener", price: "15", img: "./sharpener.jpg", description: "Scoop of smooth and silky blueberry ice cream" },
      { name: "Ruler", price: "25", img: "./ruler.png", description: "Scoop of smooth and silky blueberry ice cream" },
      { name: "Spiral Notebook", price: "400", img: "./spiral.png", description: "Scoop of smooth and silky blueberry ice cream" },
      { name: "Writing Pad ", price: "300", img: "./writing.png", description: "Scoop of smooth and silky blueberry ice cream" },

    ] 
  },
  { 
    category: "Snacks", 
    color: "brown",
    items: [
      { name: "Granola bar", price: "200", img: "./granola.png", description: "Belgian waffle topped with nutella, fudge sauce and a scoop of ice cream" }, 
      
      { name: "Chips", price: "50", img: "./chips.png", description: "Scrumptious belgian waffle topped with whipped cream and a bunch of fresh strawberries" },
      { name: "Biscuit", price: "20", img: "./biscuit.png", description: "Scoop of smooth and silky blueberry ice cream" },
      { name: "Instant Noodles", price: "300", img: "./noodles.png", description: "Scoop of smooth and silky blueberry ice cream" },
      { name: "Chocolate", price: "120", img: "./chocolate.png", description: "Scoop of smooth and silky blueberry ice cream" },
      

    ] 
  },
  { 
    category: "Merchandise", 
    color: "purple",
    items: [
      //{ name: "Hat", price: "200", img: "./oreo_shake.png", description: "The taste of oreos, you will never forget"}, 
      { name: "Hoodie", price: "300", img: "./hoodie.png", description: "Refreshing strawberry blend with creamy texture and a sweet finish" },
      { name: "Water bottle", price: "320", img: "./bottle.png", description: "Rich and creamy chocolate shake, perfect for chocolate lovers" },
      { name: "Mug", price: "200", img: "./mug.png", description: "Scoop of smooth and silky blueberry ice cream" },
      { name: "Bag", price: "1200", img: "./bag.png", description: "Scoop of smooth and silky blueberry ice cream" },

    ] 
  },
  { 
    category: "Textbooks", 
    color: "green",
    items: [
      { name: "Novel", price: "220", img: "./novel.png", description: "Rich brownie with a gooey fudge center" }, 
      { name: "Mathematics", price: "700", img: "./maths.png", description: "Soft and indulgent brownie topped with sweet, buttery caramel" },
      { name: "Literature", price: "650", img: "./literature.jpg", description: "Scoop of smooth and silky blueberry ice cream" },
      { name: "Economics", price: "720", img: "./economics.png", description: "Scoop of smooth and silky blueberry ice cream" },
      { name: "Computer Science", price: "1000", img: "./computer.png", description: "Scoop of smooth and silky blueberry ice cream" },

    ] 
  },
  


];

 
//when an item is clicked goes to that item detail
  const handleItemClick = (item) => {
    navigate(`/ItemModal`, { state: { item } }); 
  };

  // const handleSearch = (event) => {
  //   if (event.key !== "Enter") return;
  //   let found = false;
  //   menuItems.forEach((section) => {
  //     section.items.forEach((item) => {
  //       if (item.name.toLowerCase().includes(searchQuery.toLowerCase().trim())) {
  //         document.getElementById(item.name)?.scrollIntoView({ behavior: "smooth" });
  //         found = true;
  //       }
  //     });
  //   });
  //   if (!found) alert("Item not found in the menu.");
  // };

  return (
    <div>
      
      {/* <header>
        <nav>
          <h1 className="logo">Sweet Treats</h1>
          <ul>
            <li><button>Home</button></li>
            <li><button>Menu</button></li>
            <li><button>About Us</button></li>
            <li><button>Contact Us</button></li>
          </ul>
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            onKeyUp={handleSearch} 
          />
        </nav>
      </header> */}

{/* this is looping over the array of menu items
and putting it on the screen  */}
     {/*loop over the sections of the menu */}
     {menuItems.map((section, index) => (
        <section key={index} id={section.category.toLowerCase().replace(" ", "-")}>
          <h2 className={`section-title ${section.color}`}>{section.category}</h2>
          <div className="menu-items">
            {/*loop over each item in the section */}
            {section.items.map((item) => (
              <div
                className="item"
                key={item.name}
                onClick={() => handleItemClick(item)} // Navigate to ItemModal on click
              >
                <img src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <p className="price"> Rs.{item.price}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
export default MenuComponent;
