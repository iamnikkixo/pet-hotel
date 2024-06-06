import { Row, Col, Label, Input } from 'reactstrap';
import TextField from '../../utils/TextField';
import SelectField from '../../utils/SelectField';

const DogInformation = () => {
  return (
    <>
      <Row>
        <Col xs="6">
          <TextField label="Dog Name" name="dogName" type="text" />
        </Col>
        <Col xs="6">
          <TextField label="Breed" name="breed" type="text" />
        </Col>
      </Row>
      <Row>
        <Col xs="3">
          <SelectField label="Gender" name="gender" option1="M" option2="F" />
        </Col>
        <Col xs="3">
          <TextField label="Age" name="dogAge" type="text" />
        </Col>
        <Col xs="6">
          <TextField
            label="Date of Birth (if known)"
            name="dogDOB"
            type="date"
          />
        </Col>
      </Row>
      <Row>
        <Col xs="3">
          <TextField label="Weight (lbs)" name="weight" type="text" />
        </Col>
        <Col xs="3">
          <SelectField label="Desex" name="desex" option1="No" option2="Yes" />
        </Col>
        <Col xs="6">
          <TextField label="Coat Colour" name="coatColour" type="text" />
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <TextField label="Microchip" name="microchip" type="text" />
        </Col>
        <Col xs="6">
          <Label for="vaccination">Vaccination Record</Label>
          <Input id="vaccination" name="file" type="file" />
        </Col>
      </Row>
    </>
  );
};

export default DogInformation;
