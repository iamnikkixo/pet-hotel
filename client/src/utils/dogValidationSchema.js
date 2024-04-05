import * as Yup from 'yup';

export const dogValidationSchema = Yup.object().shape({
  dogName: Yup.string().required('Dog Name is required'),
  breed: Yup.string().required('Breed is required'),
  gender: Yup.string()
    .oneOf(['M', 'F'], 'Gender must be M or F')
    .required('Gender is required'),
  dogAge: Yup.number()
    .typeError('Age must be a number')
    .positive('Age must be positive')
    .integer('Age must be an integer')
    .required('Age is required'),
  dogDOB: Yup.date().nullable().notRequired().typeError('Invalid date'),
  weight: Yup.number()
    .typeError('Weight must be a number')
    .positive('Weight must be positive')
    .required('Weight is required'),
  desex: Yup.string()
    .oneOf(['No', 'Yes'], 'Desex must be Yes or No')
    .required('Desex is required'),
  coatColour: Yup.string().required('Coat Colour is required'),
  microchip: Yup.string()
    .matches(/^[0-9a-zA-Z]+$/, 'Microchip must be alphanumeric')
    .required('Microchip is required'),
});
