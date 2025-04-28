import { memo } from 'react';
import { Col, Row } from 'react-bootstrap';

import { ContactCard } from '../components/ContactCard';
import { useAppSelector } from '../ducks/hooks';

import { FavoriteContactDto } from '../types/dto/FavoriteContactDto';
import { useGetContactsQuery } from '../ducks/contacts';

export const FavoritListPage = memo(() => {
  const favoriteContacts = useAppSelector<FavoriteContactDto[]>(
    state => state.favoriteContacts
  );
  const { data: contacts } = useGetContactsQuery();

  const filteredContacts = contacts?.filter(contact => favoriteContacts.includes(contact.id));

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
