import { Formik } from 'formik';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { memo } from 'react';
import { FormikConfig } from 'formik/dist/types';

import { GroupContactsDto } from '../types/dto/GroupContactsDto';
import { useAppSelector } from '../redux/hooks';

export interface FilterFormValues {
  name: string;
  groupId: string;
}

export const FilterForm = memo<FormikConfig<Partial<FilterFormValues>>>(
  ({ onSubmit, initialValues = {} }) => {
    const groups = useAppSelector<GroupContactsDto[]>(state => state.groups);

    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} onChange={handleSubmit}>
            <Row xxl={4} className="g-4">
              <Col>
                <InputGroup className="mb-3">
                  <Form.Control
                    id={'name'}
                    name={'name'}
                    onChange={handleChange}
                    placeholder="name"
                    aria-label="name"
                  />
                </InputGroup>
              </Col>
              <Col>
                <Form.Select
                  id={'groupId'}
                  name={'groupId'}
                  aria-label="Поиск по группе"
                  onChange={handleChange}
                >
                  <option>Open this select menu</option>
                  {groups.map(groupContacts => (
                    <option value={groupContacts.id} key={groupContacts.id}>
                      {groupContacts.name}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col>
                <Button variant={'primary'} type={'submit'}>
                  Применить
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    );
  }
);
