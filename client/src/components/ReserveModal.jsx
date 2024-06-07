import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Row, Col } from 'reactstrap';
import reservationDog from '../assets/images/reservationdog.jpg';
import ReservationForm from './ReservationForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ReserveModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggle = () => setModalOpen(!modalOpen);

  return (
    <>
      <Button onClick={toggle} className="btn-lg button btn-primary">
        Reserve Now
      </Button>
      <Modal isOpen={modalOpen} className="modal-xl">
        <ModalBody className="py-0 px-0">
          <Row className="g-0">
            <Col sm="12" md="12" lg="6" className="d-none d-lg-block">
              <img
                className="img-fluid"
                src={reservationDog}
                alt="girl with dog"
              />
            </Col>
            <Col sm="12" md="12" lg="6" className="d-flex flex-column px-4">
              <ModalHeader className="border-0 pe-0 py-4 d-flex justify-content-end">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="fs-2 ps-2 pe-2"
                  onClick={toggle}
                />
              </ModalHeader>
              <ReservationForm setModalOpen={setModalOpen} />
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ReserveModal;
