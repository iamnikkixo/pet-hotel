import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button, Row, Col, Alert } from 'reactstrap';
import OwnerInformation from './OwnerInformation';
import DogInformation from './DogInformation';
import AllDone from './AllDone';
import { dogValidationSchema } from '../../utils/dogValidationSchema';
import { ownerValidationSchema } from '../../utils/ownerValidationSchema';
import { addStep, decreaseStep, selectCurrentStep } from './registerSlice';

const backend = import.meta.env.VITE_BASE_URL;

const RegisterForm = () => {
  const currentStep = useSelector(selectCurrentStep);
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    if (currentStep === 0) {
      dispatch(addStep());
      actions.setSubmitting(false);
    } else if (currentStep === 1) {
      dispatch(addStep()); // Reset the form and go

      try {
        const response = await fetch(`${backend}/registrations`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const result = await response.json();
        console.log('Registration Successful!', result);
      } catch (error) {
        console.error('Error submitting reservation: ', error.message);
      }
    }
  };

  const currentValidationSchema =
    currentStep === 0 ? ownerValidationSchema : dogValidationSchema;

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        number: '',
        email: '',
        dogName: '',
        breed: '',
        gender: '',
        dogAge: '',
        dogDOB: null, // since it's nullable and not required
        weight: '',
        desex: '',
        coatColour: '',
        microchip: '',
      }}
      //validationSchema={currentValidationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form
          className={`d-flex flex-column ${
            currentStep < 2
              ? 'justify-content-between'
              : 'justify-content-center'
          }`}
        >
          {currentStep === 0 ? (
            <Row>
              <h2 className="primary-header mb-4">Pawrent Information</h2>
            </Row>
          ) : currentStep === 1 ? (
            <Row>
              <h2 className="primary-header mb-4">Doggo Information</h2>
            </Row>
          ) : null}
          <Row>
            {currentStep === 0 ? (
              <OwnerInformation />
            ) : currentStep === 1 ? (
              <DogInformation />
            ) : (
              <AllDone />
            )}
          </Row>
          <Row>
            <Col>
              {currentStep === 1 && (
                <Button
                  className="secondary-btn me-2"
                  type="button"
                  onClick={() => dispatch(decreaseStep())}
                >
                  Back
                </Button>
              )}

              {currentStep < 2 && (
                <Button className="btn-primary" type="submit">
                  {currentStep === 0 ? 'Next' : 'Submit'}
                </Button>
              )}
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
