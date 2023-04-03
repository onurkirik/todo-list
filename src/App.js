import { Button, Container, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const sampleTodos = [
  { title: "Buy gorceries", done: false },
  { title: "Do laundary", done: false },
  { title: "Walk the dog", done: true },
  { title: "Pay pills", done: true }
];

function App() {

  let initialTodos = sampleTodos;

  useEffect(() => {
    try {
      if (localStorage["data"]) {
        initialTodos = JSON.parse(localStorage["data"]);
      }
    } catch (e) {
    }
    setTodos(initialTodos)
  }, []);



  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const save = function (arr) {
    localStorage["data"] = JSON.stringify(arr);
  };


  const handleDelete = function (event, index) {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    sortAndSetTodos(newTodos);
  }

  const sortAndSetTodos = function (arr) {
    arr.sort((a, b) => a.done - b.done);
    save(arr);
    setTodos(arr);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    let newTodos = [...todos, { title, done: false }];
    sortAndSetTodos(newTodos);
    setTitle("");
  };

  const handleTitleChange = function (event) {
    setTitle(event.target.value);
  };

  const update = function (event, index) {
    let newTodos = [...todos];
    newTodos[index].done = event.target.checked;
    sortAndSetTodos(newTodos);
  }

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
        <ListGroup>
          {
            todos.map((x, i) =>
              <ListGroup.Item key={i} className='d-flex align-items-center' >
                <input onChange={(e) => update(e, i)} type='checkbox' className='me-2' checked={x.done} />
                <span className='me-auto'>{x.title}</span>
                <Button onClick={(e) => handleDelete(e, i)} variant='danger' size='sm'>
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
