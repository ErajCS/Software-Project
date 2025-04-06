const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const cors = require('cors');  // Add this line for CORS support

const app = express();
const port = 5000;

app.use(cors());  // Enable all CORS requests
app.use(express.json());

require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_USER,
  },
});

app.post('/send-otp', (req, res) => {
  console.log('POST /send-otp route triggered');
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).send({ message: 'Invalid email address' });
  }

  const otp = crypto.randomInt(100000, 999999).toString();

  const mailOptions = {
    from: 'hiratan.122@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Failed to send OTP' });
    }
    res.status(200).send({ message: 'OTP sent successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
