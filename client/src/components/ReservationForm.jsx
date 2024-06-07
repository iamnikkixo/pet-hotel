import { Formik, Form, Field } from 'formik';
import TextField from '../utils/TextField';
import { Col, Row, Button } from 'reactstrap';
import { reservationSchema } from '../utils/validateReservation';

const backend = import.meta.env.VITE_BASE_URL;

const ReservationForm = ({ setModalOpen }) => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch(`${backend}/reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.error}`);
      }

      const result = await response.json();
      console.log('Reseravation successful', result);

      resetForm();
      setModalOpen(false);
    } catch (error) {
      console.error('Error submitting reservation: ', error.message);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dogName: '',
        checkInDate: '',
        checkOutDate: '',
        termsConditions: false,
      }}
      onSubmit={handleSubmit}
      validationSchema={reservationSchema}
    >
      <Form>
        <Row className="mb-3">
         <h1 className="brown-h1 text-center">Reserve a room!</h1>
        </Row>
        <Row>
          <Col md="6">
            <TextField label="First Name" name="firstName" type="text" />
          </Col>
          <Col md="6">
            <TextField label="Last Name" name="lastName" type="text" />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextField label="Email Address" name="email" type="text" />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextField label="Phone Number" name="phone" type="text" />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextField label="Dog Name" name="dogName" type="text" />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <TextField label="Check-In" name="checkInDate" type="date" />
          </Col>
          <Col md="6">
            <TextField label="Check-Out" name="checkOutDate" type="date" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="col-1">
            <Field
              name="termsConditions"
              className="form-check-input"
              type="checkbox"
            />
          </Col>
          <Col className="col-11">
            I understand that submitting this form does not guarantee a
            reservation. A follow-up assessment may be required, and additional
            paperwork may be necessary during check-in.
          </Col>
        </Row>
        <Row className="justify-content-center my-5 my-lg-0 mt-lg-5">
          <Button className="btn-primary btn-lg w-50" type="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </Formik>
  );
};

export default ReservationForm;
