/* eslint-disable react/prop-types */
import { Row, Col } from 'reactstrap';
import EnrollmentCard from './EnrollmentCard';

const EnrollmentList = ({ steps }) => {
  return (
    <Row className="mt-5">
      {steps.map((step, index) => {
        return (
          <Col md="4 mb-5 pb-5 pb-md-0 mb-md-0" key={index}>
            <EnrollmentCard step={step} />
          </Col>
        );
      })}
    </Row>
  );
};

export default EnrollmentList;
