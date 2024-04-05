const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 2,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    dogName: {
      type: String,
      required: true,
    },
    checkInDate: {
      type: Date,
      required: true,
    },
    checkOutDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value >= this.checkInDate;
        },
        message: 'Check-out cannot precede check-in.',
      },
    },
    formattedCheckInDate: {
      type: String,
    },
    formattedCheckOutDate: {
      type: String,
    },
  },
  { timestamps: true }
);

reservationSchema.pre('save', function (next) {
  this.formattedCheckInDate = this.checkInDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  this.formattedCheckOutDate = this.checkOutDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  next();
});

module.exports = mongoose.model('Reservation', reservationSchema);
