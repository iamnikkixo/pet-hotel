import { useSelector } from 'react-redux';
import LeftDiv from '../divs/LeftDiv';
import RightDiv from '../divs/RightDiv';
import { Container } from 'reactstrap';

const HomeList = () => {
  const homeContent = useSelector((state) => state.home.homeArray);

  return (
    <Container>
      {homeContent.map((content) => {
        if (content.id % 2 === 0) {
          return <LeftDiv key={content.id} content={content} />;
        }
        return <RightDiv key={content.id} content={content} />;
      })}
      ;
    </Container>
  );
};

export default HomeList;
