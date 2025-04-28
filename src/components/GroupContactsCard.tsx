import { memo } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { GroupContactsDto } from '../types/dto/GroupContactsDto';

interface GroupContactsCardProps {
  group: GroupContactsDto;
  withLink?: boolean;
}

export const GroupContactsCard = memo<GroupContactsCardProps>(({ group, withLink }) => {
  return (
    <Card key={group.id}>
      <Card.Header>
        {withLink ? <Link to={`/groups/${group.id}`}>{group.name}</Link> : group.name}
      </Card.Header>
      <Card.Body>{group.description}</Card.Body>
      <Card.Img variant="top" src={group.photo} />
      <Card.Footer>Contacts: {group.contactIds.length}</Card.Footer>
    </Card>
  );
});
