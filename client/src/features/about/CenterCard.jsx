/* eslint-disable react/prop-types */
import { Row, Col } from 'reactstrap';

const CenterCard = ({ content }) => {
  const { header, info } = content;
  return (
    <Row className="row-content px-md-5">
      <Col className="col-12 col-md-4">
        <h2 className="about-text-header mb-4">{header}</h2>
      </Col>
      <Col className="col-12 col-md-8">
        <p>{info}</p>
      </Col>
    </Row>
  );
};

export default CenterCard;
