import { memo, useMemo, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import { ContactCard } from '../components/ContactCard';
import { FilterForm, FilterFormValues } from '../components/FilterForm';
import { ContactDto } from '../types/dto/ContactDto';
import { useGetContactsQuery } from '../ducks/contacts';
import { useGetGroupsQuery } from '../ducks/groups';

export const ContactListPage = memo(() => {
  const { data: contacts } = useGetContactsQuery();
  const { data: groups } = useGetGroupsQuery();
  const [filterValues, setFilteredContacts] = useState<Partial<FilterFormValues>>({});

  const filteredContacts = useMemo(() => {
    if (!contacts || !groups) {
      return [];
    }

    let result: ContactDto[] = contacts;

    if (filterValues.name) {
      const fvName = filterValues.name.toLowerCase();
      result = result.filter(({ name }) => name.toLowerCase().includes(fvName));
    }

    if (filterValues.groupId) {
      const fvGroupId = groups.find(({ id }) => id === filterValues.groupId);

      if (fvGroupId) {
        result = result.filter(({ id }) => fvGroupId.contactIds.includes(id));
      }
    }

    return result;
  }, [contacts, groups, filterValues]);

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
          {filteredContacts.map(contact => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Row>
    </Row>
  );
});
