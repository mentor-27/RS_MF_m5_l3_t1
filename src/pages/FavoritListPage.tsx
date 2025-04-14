import { memo } from 'react';
import { Col, Row } from 'react-bootstrap';

import { ContactCard } from '../components/ContactCard';
import { useAppSelector } from '../redux/hooks';

import { ContactDto } from '../types/dto/ContactDto';
import { FavoriteContactDto } from '../types/dto/FavoriteContactDto';

export const FavoritListPage = memo(() => {
  const favoriteContacts = useAppSelector<FavoriteContactDto[]>(
    state => state.favoriteContacts
  );
  const contacts = useAppSelector<ContactDto[]>(state => state.contacts);

  const filteredContacts = contacts.filter(contact => favoriteContacts.includes(contact.id));

  return (
    <Row xxl={4} className="g-4">
      {filteredContacts.map(contact => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
