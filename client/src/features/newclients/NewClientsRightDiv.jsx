/* eslint-disable react/prop-types */
import { Row, Col } from 'reactstrap';
import RightHR from '../hr/RightHR';

const NewClientsRightDiv = ({ content }) => {
  const {
    header,
    image,
    subheader1,
    subheader2,
    rinfo1,
    rinfo2,
    rinfo3,
    cinfo1,
    cinfo2,
    cinfo3,
    icon,
  } = content;

  return (
    <>
      <RightHR icon={icon} />
      <Row className="row-content">
        <Col
          md="4"
          className="align-self-center order-2 order-md-1 pt-4 pt-md-0"
        >
          <img className="img-fluid" src={image} alt={header} />
        </Col>
        <Col
          md="8"
          className="d-flex flex-column justify-content-evenly order-1 order-md-2 px-3 ps-md-5"
        >
          <Row>
            <h1 className="primary-header">{header}</h1>
          </Row>
          <Row>
            <h3 className="pb-3">{subheader1}</h3>
            <ol>
              <li className="py-2">
                <span className="fw-bold">Vaccination Requirements:</span>{' '}
                {rinfo1}
              </li>
              <li className="py-2">
                <span className="fw-bold">Health Requirements:</span> {rinfo2}
              </li>
              <li className="py-2">
                <span className="fw-bold">Aggressive Behaviour:</span> {rinfo3}
              </li>
            </ol>
          </Row>
          <Row className="mt-4">
            <h3 className="pb-3">{subheader2}</h3>
            <ol>
              <li className="py-2">
                <span className="fw-bold">Advance Notice:</span> {cinfo1}
              </li>
              <li className="py-2">
                <span className="fw-bold">Fees:</span> {cinfo2}
              </li>
              <li className="py-2">
                <span className="fw-bold">Refunds:</span> {cinfo3}
              </li>
            </ol>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default NewClientsRightDiv;
