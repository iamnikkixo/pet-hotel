import { Col, Row } from 'reactstrap';
import TextField from '../../utils/TextField';

const OwnerInformation = () => {
  return (
    <>
      <Row>
        <Col xs="6">
          <TextField label="First Name" name="firstName" type="text" />
        </Col>
        <Col xs="6">
          <TextField label="Last Name" name="lastName" type="text" />
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <TextField label="Street Address" name="address" type="text" />
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <TextField label="City" name="city" type="text" />
        </Col>
        <Col xs="6">
          <TextField label="Country" name="country" type="text" />
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="6">
          <TextField label="Phone Number" name="number" type="text" />
        </Col>
        <Col xs="12" md="6">
          <TextField label="Email Address" name="email" type="text" />
        </Col>
      </Row>
    </>
  );
};

export default OwnerInformation;
