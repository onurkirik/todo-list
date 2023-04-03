import {Button, Container, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className='mt-3'>To-Do List</h1>
          <Form className='d-flex mt-3'>
            <Form.Control className='me-2' />
            <Button>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </Form>
          <ListGroup>
            <ListGroupItem>
              Güneşe çık
            </ListGroupItem>
            <ListGroupItem>
              Spor yap
            </ListGroupItem>
            <ListGroupItem>
              React çalış
            </ListGroupItem>
          </ListGroup>
      </Container>
    </div>
  );
}

export default App;
