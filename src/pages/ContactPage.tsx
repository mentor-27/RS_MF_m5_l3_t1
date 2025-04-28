import { useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { ContactCard } from '../components/ContactCard';
import { Empty } from '../components/Empty';
import { useGetContactsQuery } from '../ducks/contacts';

export const ContactPage = () => {
  const { contactId } = useParams<{ contactId: string }>();
  const { data: contacts } = useGetContactsQuery();

  const contact = useMemo(() => {
    if (!contacts) return;
    return contacts.find(({ id }) => id === contactId);
  }, [contactId]);

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>{contact ? <ContactCard contact={contact} /> : <Empty />}</Col>
    </Row>
  );
};
