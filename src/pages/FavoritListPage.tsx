import { memo } from 'react';
import { Col, Row } from 'react-bootstrap';

import { ContactCard } from '../components/ContactCard';
import { store } from '../store/store';

export const FavoritListPage = memo(() => {
  const favoriteContacts = store.favoriteContacts;
  const contacts = store.contacts;

  const filteredContacts = contacts?.filter(contact => favoriteContacts.has(contact.id));

  return (
    <Row xxl={4} className="g-4">
      {filteredContacts &&
        filteredContacts.map(contact => (
          <Col key={contact.id}>
            <ContactCard contact={contact} withLink />
          </Col>
        ))}
    </Row>
  );
});
