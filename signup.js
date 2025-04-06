import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const SignupScreen = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State to hold success/error messages

  // Basic email validation
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  // Function to send OTP to the entered email
  const sendOtpToEmail = () => {
    if (!email.trim()) {
      setMessage('Please enter your email!');
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email!');
      return;
    }

    // Send the email to the backend to send the OTP
    fetch('http://localhost:5000/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'OTP sent successfully') {
          setMessage('OTP sent to your email!');
        } else {
          setMessage('Failed to send OTP!');
        }
      })
      .catch((error) => {
        console.error('Error sending OTP:', error);
        setMessage('Error sending OTP. Please try again.');
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Always navigate to the OTP screen after the sign up button is clicked
    navigate('/otp', { state: { userEmail: email } });
    sendOtpToEmail();  // Attempt to send OTP in the background (without waiting for the result)
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>

      {message && <p className="message">{message}</p>} {/* Display success/error message */}
    </div>
  );
};

export default SignupScreen;
