import { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { GroupContactsCard } from '../components/GroupContactsCard';
import { Empty } from '../components/Empty';
import { ContactCard } from '../components/ContactCard';

import { GroupContactsDto } from '../types/dto/GroupContactsDto';
import { useGetGroupsQuery } from '../ducks/groups';
import { useGetContactsQuery } from '../ducks/contacts';

export const GroupPage = memo(() => {
  const { groupId } = useParams<{ groupId: string }>();
  const { data: contacts } = useGetContactsQuery();
  const { data: groups } = useGetGroupsQuery();

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
