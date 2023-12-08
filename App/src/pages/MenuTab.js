import React, { useState, useEffect } from 'react';
import './MenuTab.css';
import GooglePayButton from '@google-pay/button-react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate



const MenuTab = () => {
  const navigate = useNavigate();
  const cartItems = location.state?.cart || [];
  
  const sections = ['Breakfast', 'Lunch', 'Appetizers', 'Snacks'];

  const menuItems = {
    Breakfast: [
      { id: 1, name: 'Idly', price: 8, description: 'Soft and fluffy rice cakes served with coconut chutney and sambar' },
      { id: 2, name: 'Dosa', price: 8, description: 'Thin and crispy rice crepes filled with a delicious potato mixture' },
      // Add more breakfast items as needed
    ],
    Lunch: [
      { id: 3, name: 'South Indian Thaali', price: 8, description: 'A platter featuring a variety of South Indian delicacies' },
      { id: 4, name: 'North Indian Thaali', price: 8, description: 'A diverse selection of North Indian curries and breads' },
      // Add more lunch items as needed
    ],
    Appetizers: [
      { id: 5, name: 'Tandoori Chicken', price: 8, description: 'Juicy chicken marinated in aromatic spices and grilled to perfection' },
      { id: 6, name: 'Chicken Wings', price: 8, description: 'Crispy chicken wings tossed in a flavorful sauce' },
      // Add more appetizer items as needed
    ],
    Snacks: [
      { id: 7, name: 'Vada Pav', price: 8, description: 'Spicy potato fritter sandwiched in a soft bun with chutneys' },
      { id: 8, name: 'Pani Puri', price: 8, description: 'Hollow puris filled with spicy and tangy flavored water' },
      // Add more snack items as needed
    ],
  };

  const [activeSection, setActiveSection] = useState(sections[0]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    setShowCart(true);

    // Calculate the total price
    const updatedTotalPrice = updatedCart.reduce((sum, cartItem) => sum + cartItem.price, 0);
    setTotalPrice(updatedTotalPrice);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  useEffect(() => {
    // Additional side effects or data fetching can be done here
  }, []); // Empty dependency array ensures the effect runs once after initial render

  return (
    <div className="menu-page">
      <div className="menu-content">
        {/* Menu Section */}
        <div className="menu-section">
          <h1 className="menu-title">Our Menu</h1>
          <div className="section-tabs">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`section-tab ${activeSection === section ? 'active' : ''}`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </div>
            ))}
          </div>
          <div className="menu-container">
            {menuItems[activeSection].map((item) => (
              <div key={item.id} className="menu-item">
                <h3>{item.name}</h3>
                <p className="price">${item.price.toFixed(2)}</p>
                <p className="description">{item.description}</p>
                <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Background Image and Welcome Message */}
        <div className="background-section">
          <div className="welcome-message">
            <h2>Welcome to Our Restaurant!</h2>
            <p>Explore our delicious menu and enjoy a great dining experience.</p>
          </div>
        </div>
      </div>

      {/* Cart Section */}
      {showCart && <div className="cart-overlay" onClick={closeCart}></div>}

      <div className={`cart-section ${showCart ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart-btn" onClick={closeCart}>
            &times;
          </button>
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {cart.map((cartItem) => (
                <li key={cartItem.id}>{cartItem.name} - ${cartItem.price.toFixed(2)}</li>
              ))}
            </ul>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
  
           
         
  
         {/* Checkout Button */}
         <button
              className="btn btn-success"
              onClick={() => navigate('/checkoutPage', { state: { cart ,totalPrice } })} // Navigate to checkout with cart details
            >
              Checkout
            </button>
      </div>
        )}
    </div>
    </div>
        
  );
};

export default MenuTab;
