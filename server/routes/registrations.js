const express = require('express');
const router = express.Router();
const Registration = require('../models/registration');
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
  const client = new Registration({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    number: req.body.number,
    email: req.body.email,
    dogName: req.body.dogName,
    breed: req.body.breed,
    gender: req.body.gender,
    dogAge: req.body.dogAge,
    dogDOB: req.body.dogDOB,
    weight: req.body.weight,
    desex: req.body.desex,
    coatColour: req.body.coatColour,
    microchip: req.body.microchip,
  });

  const formattedDogDOB = formatDate(client.dogDOB);

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

  const mailToClient = {
    from: process.env.MAIL_FROM,
    to: client.email,
    subject: 'Woofington Inn: Registration Successful',
    html: `
    <p>Hi ${client.firstName} ${client.lastName},</p>
    <p>Your registration at Woofington Inn for <b>${client.dogName}</b> has been successfully completed!</p>
    <p><u>Registration Information</u></p>
    <ul>
    <li><strong>Name:</strong> ${client.firstName} ${client.lastName}</li>
    <li><strong>Address:</strong> ${client.address}</li>
    <li><strong>City:</strong> ${client.city}</li>
    <li><strong>Country:</strong> ${client.country}</li>
    <li><strong>Phone:</strong> ${client.number}</li>
    <li><strong>Email:</strong> ${client.email}</li>
    <li><strong>Dog Name:</strong> ${client.dogName}</li>
    <li><strong>Breed:</strong> ${client.breed}</li>
    <li><strong>Gender:</strong> ${client.gender}</li>
    <li><strong>Age:</strong> ${client.dogAge}</li>
    <li><strong>DOB:</strong> ${formattedDogDOB}</li>
    <li><strong>Weight:</strong> ${client.weight} lbs</li>
    <li><strong>Desexed:</strong> ${client.desex}</li>
    <li><strong>Coat Colour:</strong> ${client.coatColour}</li>
    <li><strong>Microchip:</strong> ${client.microchip}</li>
  </ul>
    <p>Thank you for choosing our services.</p>
    <p>Best regards,</p>
    <p>The Woofington Inn Team</p>
    
    `,
  };

  const mailToCompany = {
    from: client.email,
    to: process.env.MAIL_FROM,
    subject: `Woofington Inn: New Registration from ${client.firstName} ${client.lastName} <${client.email}>`,
    html: `
      <p>A new registration has been made:</p>
      <ul>
        <li><strong>Name:</strong> ${client.firstName} ${client.lastName}</li>
        <li><strong>Address:</strong> ${client.address}</li>
        <li><strong>City:</strong> ${client.city}</li>
        <li><strong>Country:</strong> ${client.country}</li>
        <li><strong>Phone:</strong> ${client.number}</li>
        <li><strong>Email:</strong> ${client.email}</li>
        <li><strong>Dog Name:</strong> ${client.dogName}</li>
        <li><strong>Breed:</strong> ${client.breed}</li>
        <li><strong>Gender:</strong> ${client.gender}</li>
        <li><strong>Age:</strong> ${client.dogAge}</li>
        <li><strong>DOB:</strong> ${formattedDogDOB}</li>
        <li><strong>Weight:</strong> ${client.weight} lbs</li>
        <li><strong>Desexed:</strong> ${client.desex}</li>
        <li><strong>Coat Colour:</strong> ${client.coatColour}</li>
        <li><strong>Microchip:</strong> ${client.microchip}</li>
      </ul>

    `,
  };

  try {
    const newRegistration = await client.save();

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

    res.status(201).json(newRegistration);
    console.log('New Registration Successful!', newRegistration);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
