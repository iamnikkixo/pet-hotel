import { Container } from 'reactstrap';
import { useSelector } from 'react-redux';
import NewClientsCenterDiv from './NewClientsCenterDiv';
import NewClientsRightDiv from './NewClientsRightDiv';
import NewClientsLeftDiv from './NewClientsLeftDiv';

const NewClientsList = () => {
  const newClientsInfo = useSelector(
    (state) => state.newclients.newClientsArray
  );

  return (
    <Container className="px-5 px-md-0">
      {newClientsInfo.map((info) => {
        if (info.id === 0) {
          return <NewClientsCenterDiv key={info.id} content={info} />;
        }
        if (info.id !== 0 && info.id % 2 === 0) {
          return <NewClientsRightDiv key={info.id} content={info} />;
        }
        return <NewClientsLeftDiv key={info.id} content={info} />;
      })}
    </Container>
  );
};

export default NewClientsList;
