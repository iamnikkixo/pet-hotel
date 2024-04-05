import { Row, Col } from 'reactstrap';

const AllDone = () => {
  return (
    <>
      <Row>
        <Col>
          <h2 className="display-2 fw-bold mb-0 text-center">YAY!</h2>
          <h2 className="display-2 fw-bold primary-header">DONE!</h2>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h4 className="fw-light">
            Your information is getting processed, and you will be contacted
            shortly!
          </h4>
        </Col>
      </Row>
    </>
  );
};

export default AllDone;
