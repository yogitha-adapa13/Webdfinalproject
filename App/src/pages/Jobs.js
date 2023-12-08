import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.css';

function Jobs(){
    return(
        <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Frontend developer</Card.Title>
            <Card.Text>
              Develop frontend using react
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary">Apply to this</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Backend developer</Card.Title>
            <Card.Text>
              Develop backend using java{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary">Apply to this</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Full stack</Card.Title>
            <Card.Text>
              Both front end and backend
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary">Apply to this</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    )
}

export default Jobs