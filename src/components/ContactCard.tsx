import { observer } from 'mobx-react-lite';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

import { ContactDto } from '../types/dto/ContactDto';
import { store } from '../store/store';

interface ContactCardProps {
  contact: ContactDto;
  withLink?: boolean;
}

export const ContactCard = observer<ContactCardProps>(
  ({ contact: { photo, id, name, phone, birthday, address }, withLink }) => {
    const isFav = store.isFavorite(id);

    const onToggleFav = () => {
      store.toggleFavorite(id);
    };

    return (
      <Card key={id}>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            {withLink ? <Link to={`/contact/${id}`}>{name}</Link> : name}
            <Star
              size={24}
              {...(isFav ? { fill: 'orange' } : null)}
              onClick={onToggleFav}
              cursor="pointer"
            />
          </Card.Title>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>
                <Link to={`tel:${phone}`} target="_blank">
                  {phone}
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>{birthday}</ListGroup.Item>
              <ListGroup.Item>{address}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card.Body>
      </Card>
    );
  }
);
