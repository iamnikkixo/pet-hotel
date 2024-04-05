/* eslint-disable react/prop-types */
import { Row, Col } from 'reactstrap';
import RightHR from '../hr/RightHR';
import Carousel from '../carousel/Carousel';

const HomeRightDiv = ({ content }) => {
  const { header, info, image, icon } = content;

  return (
    <>
      <RightHR icon={icon} />
      <Row className="row-content">
        <Col md="6" className="order-2 order-md-1 px-md-5">
          {image ? (
            <img className="img-fluid mt-5 mt-md-0" src={image} alt={header} />
          ) : (
            <Carousel />
          )}
        </Col>
        <Col md="6" className="align-self-center order-1 order-md-2 px-md-5">
          <h1 className="secondary-header">{header}</h1>
          <p>{info}</p>
        </Col>
      </Row>
    </>
  );
};

export default HomeRightDiv;
