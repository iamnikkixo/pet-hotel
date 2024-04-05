/* eslint-disable react/prop-types */
import { Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

const EnrollmentCard = ({ step }) => {
  const { stepNumber, subheader, info } = step;

  return (
    <Card className="p-md-4 border-0">
      <CardTitle className="mb-5 display-2">0{stepNumber}</CardTitle>
      <CardSubtitle className="text-center mb-3">
        <h2>{subheader}</h2>
      </CardSubtitle>
      <CardBody className="p-xs-0 ">{info}</CardBody>
    </Card>
  );
};

export default EnrollmentCard;
