/* eslint-disable react/prop-types */
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RightHR = ({ icon }) => {
  return (
    <Row className="row-content">
      <div className="hr-center">
        <div className="hr-line-long" />
        <div className="hr-icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="hr-line-short" />
      </div>
    </Row>
  );
};

export default RightHR;
