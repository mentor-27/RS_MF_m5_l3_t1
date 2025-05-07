import { observer } from 'mobx-react-lite';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { GroupContactsCard } from '../components/GroupContactsCard';
import { Empty } from '../components/Empty';
import { ContactCard } from '../components/ContactCard';

import { GroupContactsDto } from '../types/dto/GroupContactsDto';
import { store } from '../store/store';

export const GroupPage = observer(() => {
  const { groupId } = useParams<{ groupId: string }>();
  const contacts = store.contacts;
  const groups = store.groups;

  const currGroup = groups?.find(({ id }) => id === groupId);
  const filteredContacts = contacts?.filter(({ id }) => currGroup?.contactIds.includes(id));

  return (
    <Row className="g-4">
      {groups ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard group={currGroup as GroupContactsDto} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {filteredContacts &&
                filteredContacts.map(contact => (
                  <Col key={contact.id}>
                    <ContactCard contact={contact} withLink />
                  </Col>
                ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  );
});
