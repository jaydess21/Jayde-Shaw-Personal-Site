const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

require('dotenv').config(); // Load environment variables from .env file

// Access environment variables
const email = process.env.EMAIL;
const emailPassword = process.env.EMAIL_PASSWORD;

// Use these variables in your code, such as when setting up email transport
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient@example.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    console.log('Sending email...');
    console.log('Email options:', mailOptions); // Log email options
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
