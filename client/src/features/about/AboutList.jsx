import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { selectAboutContent, selectFeaturedContent } from './aboutSlice';
import LeftDiv from '../divs/LeftDiv';
import RightDiv from '../divs/RightDiv';
import CenterCard from './CenterCard';

const AboutList = () => {
  const aboutContent = useSelector(selectAboutContent);
  const featuredAboutContent = useSelector(selectFeaturedContent);

  return (
    <Container className="px-5 px-md-0">
      {aboutContent.map((content) => {
        if (content.id === 0) {
          return <LeftDiv key={content.id} content={content} />;
        } else if (content.id === 1) {
          return <RightDiv key={content.id} content={content} />;
        }
        return null;
      })}
      <Row className="py-5">
        {featuredAboutContent.map((content) => {
          return <CenterCard key={content.id} content={content} />;
        })}
      </Row>
    </Container>
  );
};

export default AboutList;
