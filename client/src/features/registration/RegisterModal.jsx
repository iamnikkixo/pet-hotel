import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, ModalHeader, ModalBody, Button, Row, Col } from 'reactstrap';
import RegisterForm from './RegisterForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import RegisterImage from '../../assets/images/newclients/register.jpeg';
import { resetStep, selectCurrentStep } from './registerSlice';

const RegisterModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const currentStep = useSelector(selectCurrentStep);
  const dispatch = useDispatch();

  const toggle = () => {
    setModalOpen(!modalOpen);
    dispatch(resetStep());
  };

  return (
    <>
      <Button onClick={toggle} className="btn-lg button btn-primary">
        Enroll Now!
      </Button>
      <Modal
        isOpen={modalOpen}
        className={`${currentStep === 2 ? 'modal-lg' : 'modal-xl'}`}
      >
        <ModalBody className="py-0 pe-md-0">
          <Row className="g-0">
            <Col
              sm="12"
              md="12"
              lg={`${currentStep === 2 ? '6' : '7'}`}
              className="d-flex flex-column pb-5 px-4"
            >
              <ModalHeader className="border-0 ps-0 py-4">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="fs-2 pe-2"
                  onClick={toggle}
                />
              </ModalHeader>
              <Row className="flex-grow-1">
                <RegisterForm />
              </Row>
            </Col>
            <Col
              sm="12"
              md="12"
              lg={`${currentStep === 2 ? '6' : '5'}`}
              className="d-none d-md-block"
            >
              <img
                className="img-fluid"
                src={RegisterImage}
                alt="register corgi"
              />
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

export default RegisterModal;
