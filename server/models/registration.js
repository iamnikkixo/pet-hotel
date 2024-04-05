const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema(
  {
    firstName: { type: String, min: 2, max: 20, required: true },
    lastName: { type: String, min: 2, max: 20, required: true },
    address: { type: String, max: 100, required: true },
    city: { type: String, min: 2, max: 50, required: true },
    country: { type: String, min: 4, max: 56, required: true },
    number: { type: String, min: 10, max: 15, unique: true, required: true },
    email: { type: String, min: 10, max: 100, required: true, unique: true },
    dogName: { type: String, min: 2, max: 20, required: true },
    breed: { type: String, min: 1, max: 50, required: true },
    gender: { type: String, required: true, enum: ['F', 'M'] },
    dogAge: { type: Number, required: true },
    dogDOB: { type: Date },
    weight: { type: Number, min: 1, required: true },
    desex: {
      type: String,
      required: true,
      enum: ['Yes', 'No'],
    },
    coatColour: { type: String, max: 12, required: true },
    microchip: { type: String, required: true, unique: true },
    formattedCreatedAt: {
      type: String,
    },
    formattedUpdatedAt: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

registrationSchema.pre('save', function (next) {
  if (this.isNew || this.isModified('createdAt')) {
    this.formattedCreatedAt = this.createdAt.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  }

  if (this.isNew || this.isModified('updatedAt')) {
    this.formattedUpdatedAt = this.updatedAt.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  }

  next();
});

module.exports = mongoose.model('Registration', registrationSchema);
