import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuComponent from './MenuComponent';
import SweetTreats from './home';
import Header from './Header';
import Footer from './Footer';
import SignupScreen from './signup';  // Ensure the path is correct
import OtpScreen from './otp';    // Ensure the path is correct
import CartPage from './cartPage';
import ItemModal from './ItemModal';
import EmptyCart from './emptycart';
import CategoryItems from './CategoryItems';
import { CartProvider } from './CartContext';


const App = () => {
  return (
    <Router>
      <CartProvider>
      <Header />
      <Routes>
        {/* Default route, shows SweetTreats Home Screen */}
        <Route path="/Home" element={<SweetTreats />} />
        
        {/* Route for Signup screen */}
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/" element={<SweetTreats />} />  
        
        {/* Route for OTP screen, after sign up */}
        <Route path="/otp" element={<OtpScreen />} />
        
        {/* Route for Menu screen after logging in */}
        <Route path="/Menu" element={<MenuComponent />} />
        <Route path="/CategoryItems" element={<CategoryItems />} />

        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/emptycart" element={<EmptyCart />} />
        <Route path="/ItemModal" element={<ItemModal />} />
      </Routes>
      <Footer />
      </CartProvider>
    </Router>
  );
};

export default App;
