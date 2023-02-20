import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ModalAdd = ({ show, newItem, setNewItem, addItem, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <Form>
          <Form.Group className="m-3">
            <Form.Label>Add item to list</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type the text here..."
              autoFocus
              className="rounded-0 list-group-bg"
              onChange={(event) => setNewItem(event.target.value)}
            />
          </Form.Group>
        </Form>
        <Modal.Footer className="border-0">
          {
            newItem &&
            <Button size="sm" className="add-button v-button" onClick={addItem}>
              ADD
            </Button>
          }
          <Button size="sm" className="delete-button v-button" onClick={handleClose}>
            CANCEL
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
}

export default ModalAdd;
