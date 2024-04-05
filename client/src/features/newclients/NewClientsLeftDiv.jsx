/* eslint-disable react/prop-types */
import { Row, Col } from 'reactstrap';
import LeftHR from '../hr/RightHR';
import FAQAccordion from './FAQAccordion';

const NewClientsLeftDiv = ({ content }) => {
  const { header, info, icon } = content;

  return (
    <>
      <LeftHR icon={icon} />
      <Row>
        <Col className="align-self-center pe-5">
          <h1 className="secondary-header">{header}</h1>
          <p className="text-center">{info}</p>
        </Col>
      </Row>
      <Row>
        <FAQAccordion content={content} />
      </Row>
    </>
  );
};

export default NewClientsLeftDiv;
