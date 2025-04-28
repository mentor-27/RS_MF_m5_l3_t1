import { memo } from 'react';
import { Col, Row } from 'react-bootstrap';

import { GroupContactsCard } from '../components/GroupContactsCard';
import { useGetGroupsQuery } from '../ducks/groups';

export const GroupListPage = memo(() => {
  const { data: groups } = useGetGroupsQuery();

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
