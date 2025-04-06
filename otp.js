// import React, { useState } from 'react';
// import './otp.css';

// const OtpScreen = ({ userEmail }) => {
//   const [otp, setOtp] = useState(['', '', '', '']);

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return;

//     let newOtp = [...otp];
//     newOtp[index] = element.value;
//     setOtp(newOtp);

//     // Focus next input
//     if (element.nextSibling && element.value !== '') {
//       element.nextSibling.focus();
//     }
//   };

//   const handleVerify = () => {
//     alert(`Verifying OTP: ${otp.join('')}`);
//     // You can add your verification logic here
//   };

//   const handleResend = () => {
//     alert('Resending OTP to ' + userEmail);
//     // Add your resend logic here
//   };

//   return (
//     <div className="otp-container">
//       <div className="image-placeholder">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/545/545682.png"
//           alt="Phone Icon"
//         />
//       </div>

//       <h2>OTP</h2>

//       <p>
//         A 4-digit code has been sent to <span className="user-email">{userEmail}</span>
//       </p>

//       <div className="otp-inputs">
//         {otp.map((data, index) => (
//           <input
//             key={index}
//             type="text"
//             maxLength="1"
//             value={otp[index]}
//             onChange={(e) => handleChange(e.target, index)}
//             onFocus={(e) => e.target.select()}
//           />
//         ))}
//       </div>

//       <p className="resend-text">
//         Didn't receive the code?{' '}
//         <span className="resend-link" onClick={handleResend}>
//           RESEND
//         </span>
//       </p>

//       <button className="verify-btn" onClick={handleVerify}>
//         Verify
//       </button>
//     </div>
//   );
// };

// export default OtpScreen;

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './otp.css';

const OtpScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get email from navigation state
  const { userEmail } = location.state || {};

  //  Always call hooks at the top (before return/condition)
  const [otp, setOtp] = useState(['', '', '', '']);

  // Redirect inside useEffect, not inline
  useEffect(() => {
    if (!userEmail) {
      navigate('/'); // Redirect if no email
    }
  }, [userEmail, navigate]);

  // Optionally return null (or loading indicator)
  if (!userEmail) {
    return null; // While useEffect redirects, you return empty UI
  }

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value !== '') {
      element.nextSibling.focus();
    }
  };

  const handleVerify = () => {
    alert(`Verifying OTP: ${otp.join('')}`);
  };

  const handleResend = () => {
    alert(`Resending OTP to ${userEmail}`);
  };

  return (
    <div className="otp-container">
      <div className="image-placeholder">
        <img
          src="https://cdn-icons-png.flaticon.com/512/545/545682.png"
          alt="Phone Icon"
        />
      </div>

      <h2>OTP</h2>

      <p>
        A 4-digit code has been sent to{' '}
        <span className="user-email">{userEmail}</span>
      </p>

      <div className="otp-inputs">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={otp[index]}
            onChange={(e) => handleChange(e.target, index)}
            onFocus={(e) => e.target.select()}
          />
        ))}
      </div>

      <p className="resend-text">
        Didn't receive the code?{' '}
        <span className="resend-link" onClick={handleResend}>
          RESEND
        </span>
      </p>

      <button className="verify-btn" onClick={handleVerify}>
        Verify
      </button>
    </div>
  );
};

export default OtpScreen;
