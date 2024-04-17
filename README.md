![Pet Hotel Banner](banner.png)

# Pet Hotel / Woofington Inn 🐾

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="ViteJS Logo" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg" width="50" />
</p>

<br/>

This project is built with Node.js and uses Express for the backend. MongoDB is utilized as the database.

## 📋 Table of Contents

1. 📖 [Introduction](#introduction)
   - 📱 [Description + Mobile Responsiveness](#description--mobile-responsiveness)
2. 🛠️ [Tech Stacks](#tech-stacks)
3. ✨ [Features](#features)
4. 🚀 [Quick Start](#quick-start)
5. 📡 [API Endpoints](#api-endpoints)
6. 📚 [Sources](#sources)
   - 🎨 [UX/UI Design](#uxui-design)
   - 📷 [Picture Sources](#picture-sources)
7. 📞 [Contact Information](#contact-information)

## 📖 Introduction

### 📱 Description + Mobile Responsiveness

Pet Hotel is a web application designed for dog owners or "pawrents" seeking daycare and boarding services for their furry friends. The application offers the following features:

- **Company Information:** Learn about the company's history, mission, values, and the founder.
- **Services:** Explore a range of services including daycare options, boarding facilities, grooming services, pool access, and more.
- **New Client Information:** Find essential details for new clients, including the enrollment process, FAQ, and policies.
- **Registration & Reservation:** Easily register as a new client, provide pet details and vaccination records, and make reservations for daycare and boarding services. Registrations and reservations are saved in the database, and confirmation emails are sent to both the new client and the business.

The web app is designed to be fully responsive, providing a seamless experience across devices like desktops, tablets, and smartphones. The layout and functionality adjust dynamically for optimal usability on any screen size.

Bootstrap was used to enhance the mobile responsiveness and overall design of the application.

## 🛠️ Tech Stacks

This project is built using the following technologies:

- **Node.js**
- **Express**
- **MongoDB**
- **Bootstrap**

## ✨ Features

- Comprehensive service offerings for dog daycare and boarding
- Mobile responsive design
- User registration and reservation system
- Email confirmations for registrations and reservations

## 🚀 Quick Start

1. Clone this repository.
2. Install dependencies in the client and server directories using `npm install`.
3. Create a `.env` file in the client and server directories.
4. Add the following environment variables to the `.env` file:

   Client:

   - `VITE_BASE_URL=`

   Server:

   - `MONGODB_URL=`
   - `MAIL_HOST=`
   - `MAIL_PORT=`
   - `MAIL_SECURE=`
   - `MAIL_USERNAME=`
   - `MAIL_PASSWORD=`
   - `MAIL_FROM=`

5. Start the client and server with `npm run dev`.

## 📡 API Endpoints

### Registrations Endpoint

- **Path:** `/registrations`
- **Method:** `POST`
- **Description:**
  This endpoint is used for registering new clients and their pets in the system. It accepts information about the client and pet, processes the registration, and stores the data in the database.
- **Request Body:**
  Includes fields such as client information & pet information.
- **Response:**
  Returns a confirmation message with the registration details and triggers an email to the client.

### Reservations Endpoint

- **Path:** `/reservations`
- **Method:** `POST`
- **Description:**
  This endpoint allows clients to make reservations for daycare or boarding services. It captures the reservation details.
- **Request Body:**
  Includes fields: firstName, lastName, email, phone, dogName, checkInDate, checkOutDate.
- **Response:**
  Returns a booking confirmation message and sends an email to both the client and the business.

## 🎨 UX/UI Design

I created & designed it.

## 📷 Picture Sources

The pictures used in this project are sourced from [Pexels](https://www.pexels.com/) and [Unsplash](https://unsplash.com/), which provide free-to-use images. All images included in this repository are licensed for use in this project.

## 📞 Contact Information

For any questions, feedback, or collaboration opportunities, feel free to reach out!

- **Email:** [My Email Address](mailto:nikkielizatran@gmail.com)
- **GitHub:** [My GitHub Profile](https://github.com/iamnikkixo)
