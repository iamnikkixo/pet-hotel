import { Container } from 'reactstrap';
import LeftDiv from '../divs/LeftDiv';
import RightDiv from '../divs/RightDiv';
import { useSelector } from 'react-redux';

const ServicesList = () => {
  const servicesArray = useSelector((state) => state.services.servicesArray);

  return (
    <Container className="px-5 md-px-0">
      {servicesArray.map((service) => {
        if (service.id % 2 === 0) {
          return <LeftDiv key={service.id} content={service} />;
        }
        return <RightDiv key={service.id} content={service} />;
      })}
      ;
    </Container>
  );
};

export default ServicesList;
