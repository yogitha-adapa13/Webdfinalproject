import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.css';

function Profile(){
    return(
      <div classname = "min-vw-100">
        <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Text>
              Name of the person
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary">Click here</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Email</Card.Title>
            <Card.Text>
              Email of the person{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary">Click here</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Address</Card.Title>
            <Card.Text>
              Address of the person
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary">Click here</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
      </div>
    )
}

export default Profile