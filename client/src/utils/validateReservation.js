import * as Yup from 'yup';

export const reservationSchema = Yup.object().shape({
  firstName: Yup.string().min(2).required('Required'),
  lastName: Yup.string().min(2).required('Required'),
  email: Yup.string().email().required('Required'),
  phone: Yup.number().required('Required'),
  dogName: Yup.string().required('Required'),
  checkInDate: Yup.date()
    .min(new Date(), 'Choose a valid date')
    .required('Required'),
  checkOutDate: Yup.date()
    .min(Yup.ref('checkInDate'), 'Check-out cannot precede check-in.')
    .required('Required'),
  termsConditions: Yup.boolean().oneOf([true], 'Message'),
});
