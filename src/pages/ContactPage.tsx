import { useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { ContactDto } from '../types/dto/ContactDto';
import { ContactCard } from '../components/ContactCard';
import { Empty } from '../components/Empty';
import { useAppSelector } from '../redux/hooks';

export const ContactPage = () => {
  const { contactId } = useParams<{ contactId: string }>();
  const contacts = useAppSelector<ContactDto[]>(state => state.contacts);

  const contact = useMemo<ContactDto>(
    () => contacts.find(({ id }) => id === contactId) as ContactDto,
    [contactId]
  );

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>{contact ? <ContactCard contact={contact} /> : <Empty />}</Col>
    </Row>
  );
};
