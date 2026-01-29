const express = require('express');
const nodemailer = require('nodemailer');
//const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(express.json());
//app.use(cors())
app.use(express.static(__dirname)); // serve HTML file

app.post('/send-mail', async (req, res) => {
  const { flightNumber, flightDate, destination, email } = req.body;

  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // your Gmail
        pass: process.env.EMAIL_PASS   // your app password
      }
    });

    // HTML Email Template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd;">
        <h2 style="color: #2563eb;">Flight Confirmation</h2>
        <p>Dear Passenger,</p>
        <p>Your flight booking has been confirmed. Below are your details:</p>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td><strong>Flight Number:</strong></td><td>${flightNumber}</td></tr>
          <tr><td><strong>Date:</strong></td><td>${flightDate}</td></tr>
          <tr><td><strong>Destination:</strong></td><td>${destination}</td></tr>
        </table>
        <p>We wish you a pleasant journey!</p>
      </div>
    `;

    // Send Mail
    await transporter.sendMail({
      from: `"Flight Desk" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Flight Confirmation - ${flightNumber}`,
      html: htmlContent
    });

    res.json({ message: 'Flight confirmation email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
