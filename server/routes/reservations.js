const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');
const nodemailer = require('nodemailer');

// POST
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}

router.post('/', async (req, res) => {
  const reservation = new Reservation({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    dogName: req.body.dogName,
    checkInDate: req.body.checkInDate,
    checkOutDate: req.body.checkOutDate,
    termsConditions: req.body.termsConditions,
  });

  // Format dates for the email
  const formattedCheckInDate = formatDate(reservation.checkInDate);
  const formattedCheckOutDate = formatDate(reservation.checkOutDate);

  // nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE === 'true',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  // Email options
  const mailToClient = {
    from: process.env.MAIL_FROM,
    to: reservation.email,
    subject: 'Woofington Inn: Reservation Successful',
    html: `
      <p>Hi ${reservation.firstName} ${reservation.lastName},</p>
      <p>Your reservation at Woofington Inn for <span><b>${reservation.dogName}</b></span> from <span><b>${formattedCheckInDate}</b></span> to <span><b>${formattedCheckOutDate}</b></span> was successful!</p>
      <p>Thank you for choosing our services.</p>
      <p>Best regards,</p>
      <p>The Woofington Inn Team</p>
    `,
  };

  const mailToCompany = {
    from: reservation.email,
    to: process.env.MAIL_FROM,
    subject: `Woofington Inn: New Reservation from ${reservation.firstName} ${reservation.lastName} <${reservation.email}>`,
    html: `
      <p>A new reservation has been made:</p>
      <ul>
        <li><strong>Name:</strong> ${reservation.firstName} ${reservation.lastName}</li>
        <li><strong>Dog Name:</strong>  ${reservation.dogName}</li>
        <li><strong>Phone:</strong> ${reservation.phone}</li>
        <li><strong>Email:</strong> ${reservation.email}</li>
        <li><strong>Check-In Date:</strong> ${formattedCheckInDate}</li>
        <li><strong>Check-Out Date:</strong> ${formattedCheckOutDate}</li>
      </ul>
      <p>Please review the details and take necessary actions.</p>
    `,
  };

  try {
    const newReservation = await reservation.save();

    // sending email
    try {
      // sending email to the client
      await transporter.sendMail(mailToClient);
      console.log('Email sent to the client successfully.');

      // sending email to the company
      await transporter.sendMail(mailToCompany);
      console.log('Email sent to the company successfully.');

      console.log('Both emails have been sent successfully.');
    } catch (emailError) {
      console.error('Error sending emails:', emailError.message);
    }

    res.status(201).json(newReservation);
    console.log('New Reservation Successful!', newReservation);
  } catch (error) {
    console.error('Error saving reservation:', error.message);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
