/* eslint-disable react/prop-types */
import { Row, Col } from 'reactstrap';

const CenterCard = ({ content }) => {
  const { header, info } = content;
  return (
    <Row className="row-content px-5">
      <Col className="col-md-4">
        <h2 className="about-text-header">{header}</h2>
      </Col>
      <Col>
        <p>{info}</p>
      </Col>
    </Row>
  );
};

export default CenterCard;
