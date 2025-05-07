import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import { ContactCard } from '../components/ContactCard';
import { FilterForm, FilterFormValues } from '../components/FilterForm';
import { store } from '../store/store';

export const ContactListPage = observer(() => {
  const [filterValues, setFilteredContacts] = useState<Partial<FilterFormValues>>({});

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    setFilteredContacts(fv);
  };

  return (
    <Row xxl={1}>
      <Row className="mb-3">
        <FilterForm initialValues={{}} onSubmit={onSubmit} />
      </Row>
      <Row>
        <Row xxl={4} className="g-4">
          {store.getFilteredContacts(filterValues).map(contact => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Row>
    </Row>
  );
});
