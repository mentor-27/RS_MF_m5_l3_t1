import { memo } from 'react';
import { Col, Row } from 'react-bootstrap';

import { GroupContactsCard } from '../components/GroupContactsCard';
import { useAppSelector } from '../redux/hooks';
import { GroupContactsDto } from '../types/dto/GroupContactsDto';

export const GroupListPage = memo(() => {
  const groups = useAppSelector<GroupContactsDto[]>(state => state.groups);

  return (
    <Row xxl={4}>
      {groups.map(group => (
        <Col key={group.id}>
          <GroupContactsCard group={group} withLink />
        </Col>
      ))}
    </Row>
  );
});
