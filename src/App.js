import { Button, Container, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {

  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    { title: "Buy gorceries", done: false },
    { title: "Do laundary", done: false },
    { title: "Walk the dog", done: true },
    { title: "Pay pills", done: true }
  ]);

  const handleSubmit = function (event) {
    event.preventDefault();
    setTodos([...todos, {title, done:false}]);
    setTitle("");
  };

  const handleTitleChange = function (event) {
    setTitle(event.target.value);
  };

  return (
    <div className="App">
      <Container>
        <h1 className='mt-3'>To-Do List</h1>
        <Form onSubmit={handleSubmit} className='d-flex mt-3'>
          <Form.Control value={title} onChange={handleTitleChange} className='me-2' required />
          <Button variant='success' type='submit'>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Form>
        {title}
        <ListGroup>
          {
            todos.map((x, i) =>
              <ListGroup.Item key={i} className='d-flex align-items-center' >
                <input type='checkbox' className='me-2' checked={x.done} />
                <span className='me-auto'>{x.title}</span>
                <Button variant='danger' size='sm'>
                  <FontAwesomeIcon icon={faXmark} />
                </Button>
              </ListGroup.Item>
            )
          }
        </ListGroup>
      </Container>
    </div>
  );
}

export default App;
