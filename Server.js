const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Configure Nodemailer with Office 365 SMTP + app password
const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false, // use TLS
  auth: {
    // Replace with your real O365 email and *app password*, not the main password
    user: 'your_email@domain.com',
    pass: 'your_app_password'
  },
  tls: {
    // These options are sometimes needed for older TLS versions
    ciphers: 'SSLv3',
    rejectUnauthorized: false
  }
});

// API endpoint to send email
app.post('/send-email', (req, res) => {
  const mailOptions = {
    from: 'your_email@domain.com', // sender address
    to: req.body.to,               // list of receivers
    subject: req.body.subject,     // Subject line
    text: req.body.text           // plain text body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: error.toString() });
    }
    // If successful
    res.json({ message: 'Email sent: ' + info.response });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});