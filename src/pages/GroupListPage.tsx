import { observer } from 'mobx-react-lite';
import { Col, Row } from 'react-bootstrap';

import { GroupContactsCard } from '../components/GroupContactsCard';
import { store } from '../store/store';

export const GroupListPage = observer(() => {
  const groups = store.groups;

  return (
    <Row xxl={4}>
      {groups &&
        groups.map(group => (
          <Col key={group.id}>
            <GroupContactsCard group={group} withLink />
          </Col>
        ))}
    </Row>
  );
});
