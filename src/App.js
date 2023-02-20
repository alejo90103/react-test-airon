import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import Item from "./Components/Item";
import ModalAdd from "./Components/ModalAdd";

const randomId = (prefix) => {
  return `${prefix}-${Math.random().toString(16).slice(-4)}`;
}

function App() {
  const [list, setList] = useState([
    { 
      id: randomId("item"),
      name: "Item 1",
      checked: false
    },
    {
      id: randomId("item"),
      name: "Item 2",
      checked: false
    },
    {
      id: randomId("item"),
      name: "Item 3",
      checked: false
    },
    {
      id: randomId("item"),
      name: "Item 4",
      checked: false
    }
  ]);
  const [newItem, setNewItem] = useState('');
  const [show, setShow] = useState(false);
  const [lastItemRemove, setLastItemRemove] = useState([]);
  const [showDelete, setShowDelete] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const isSeleted = list.find((e) => e.checked === true);
    setShowDelete(isSeleted);
  }, [list]);

  const addItem = () => {
    let id = randomId("item");
    const updateList = [
      ...list, 
      {
        id,
        name: newItem,
        checked: false
      }
    ];
    setList(updateList);
    handleClose();
  };

  const handleSelectedItem = (index) => {
    const updateList = [...list];
    updateList[index].checked = !updateList[index].checked;
    setList(updateList);
  }

  const handleDoubleClickDeleteItem = (id) => {
    const lastRemoveList = [...list];
    const updateList = list.filter((e, i) => {
      return e.id != id;
    });
    setList(updateList);
    setLastItemRemove(lastRemoveList);
  }

  const handleDeleteItem = (id) => {
    const lastRemoveList = [...list];
    setLastItemRemove(lastRemoveList);
    const updateList = list.filter((e, i) => {
      return !e.checked;
    });
    setList(updateList);
  }

  const handleRollbackList = () => {
    setList(lastItemRemove);
    setLastItemRemove([]);
  }

  return (
    <div className="App">
      <Card className="v-card rounded-4 m-3">
        <Card.Body>
          <Card.Title className="text-black text-center mt-2 text-bold"><h3>This is a technical proof</h3></Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-black text-center mt-1 mb-2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum!.</p>
          </Card.Subtitle>
          {
            list &&
            <ListGroup className="rounded-0 py-1 px-2">
              {
                list.map((e, i) => {
                  return (
                    <Item key={i} item={e} onClick={() => handleSelectedItem(i)} onDoubleClick={() => handleDoubleClickDeleteItem(e.id)} />
                  )
                })
              }
            </ListGroup>
          }
          <div className="d-flex justify-content-between my-3">
            <div>
              {
                lastItemRemove.length > 0 &&
                <Button size="sm" className="delete-button v-icon-button" onClick={handleRollbackList}><i className="bi bi-arrow-counterclockwise"></i></Button>
              }
              {' '}
              {
                showDelete &&
                <Button id="delete" size="sm" className="delete-button v-button" onClick={handleDeleteItem}>DELETE</Button>
              }
            </div>
            <div>
              <Button size="sm" className="add-button v-button" onClick={handleShow}>ADD</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      <ModalAdd show={show} newItem={newItem} setNewItem={setNewItem} addItem={addItem} handleClose={handleClose} />
    </div>
  );
}

export default App;
