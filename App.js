import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuComponent from './MenuComponent';
import SweetTreats from './home';
import Header from './Header';
import Footer from './Footer';
import SignupScreen from './signup';  // Ensure the path is correct
import OtpScreen from './otp';    // Ensure the path is correct

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Default route, shows SweetTreats Home Screen */}
        <Route path="/Home" element={<SweetTreats />} />
        
        {/* Route for Signup screen */}
        <Route path="/signup" element={<SignupScreen />} />
        
        {/* Route for OTP screen, after sign up */}
        <Route path="/otp" element={<OtpScreen />} />
        
        {/* Route for Menu screen after logging in */}
        <Route path="/Menu" element={<MenuComponent />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
