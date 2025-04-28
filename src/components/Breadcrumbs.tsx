import { memo } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { PATHNAMES_MAP } from '../constants/pathnamesMap';

interface BreadcrumbsProps {
  pathNames: string[];
}

export const Breadcrumbs = memo<BreadcrumbsProps>(({ pathNames }) => {
  return (
    <Row>
      <Col className={'mb-4'}>
        <ListGroup horizontal>
          <ListGroup.Item>
            <Link to={'/'}>Home</Link>
          </ListGroup.Item>
          {pathNames.map((name, index) => {
            const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`;
            // Определяем, является ли текущий элемент последним в списке
            const isLast = index === pathNames.length - 1;

            return (
              <ListGroup.Item key={routeTo}>
                {isLast ? (
                  <span className={'active'}>{PATHNAMES_MAP[name] || name}</span>
                ) : (
                  <Link to={routeTo} className={'link active'}>
                    {PATHNAMES_MAP[name]}
                  </Link>
                )}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Col>
    </Row>
  );
});
