/* eslint-disable react/prop-types */
import { Row, Col } from 'reactstrap';
import LeftHR from '../hr/LeftHR';
import Carousel from '../carousel/Carousel';

const LeftDiv = ({ content }) => {
  const { header, info, image, icon } = content;

  return !icon ? (
    <Row className="row-content">
      <Col md="6" className="align-self-center px-md-5">
        <h1 className="primary-header">{header}</h1>
        <p>{info}</p>
      </Col>
      <Col md="6" className="align-self-center px-md-5">
        {image ? (
          <img className="img-fluid mt-5 mt-md-0" src={image} alt={header} />
        ) : (
          <Carousel />
        )}
      </Col>
    </Row>
  ) : (
    <>
      <LeftHR header={header} icon={icon} />
      <Row className="row-content">
        <Col md="6" className="align-self-center px-md-5">
          <h1 className="primary-header">{header}</h1>
          <p>{info}</p>
        </Col>
        <Col md="6" className="align-self-center px-md-5">
          <img className="img-fluid mt-5 mt-md-0" src={image} alt={header} />
        </Col>
      </Row>
    </>
  );
};

export default LeftDiv;
