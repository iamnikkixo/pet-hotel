/* eslint-disable react/prop-types */
import { Row, Col } from 'reactstrap';
import RegisterModal from '../registration/RegisterModal';
import EnrollmentList from './EnrollmentList'

const NewClientsCenterDiv = ({ content }) => {
  const { header, steps } = content;

  return (
    <>
      <h1 className="primary-header">{header}</h1>
      <EnrollmentList steps={steps} />
      <Row className="pt-3 pt-md-5 row-content">
        <Col className="text-center">
          <RegisterModal />
        </Col>
      </Row>
    </>
  );
};

export default NewClientsCenterDiv;
