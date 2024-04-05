import * as Yup from 'yup';

export const ownerValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required')
    .max(20, 'First Name must be at most 20 characters long'),
  lastName: Yup.string()
    .required('Last Name is required')
    .max(20, 'Last Name must be at most 20 characters long'),
  address: Yup.string()
    .required('Street Address is required')
    .max(100, 'Street Address must be at most 100 characters long'),
  city: Yup.string()
    .required('City is required')
    .max(50, 'City must be at most 50 characters long'),
  country: Yup.string()
    .required('Country is required')
    .max(50, 'Country must be at most 50 characters long'),
  number: Yup.string()
    .required('Phone Number is required')
    .matches(/^[0-9]+$/, 'Phone Number must be valid')
    .min(10, 'Phone Number must be at least 10 digits long')
    .max(15, 'Phone Number must be at most 15 digits long'),
  email: Yup.string()
    .email('Email must be a valid email address')
    .required('Email is required')
    .max(100, 'Email must be at most 100 characters long'),
});
