import React from 'react';
import Form from 'react-bootstrap/Form';

const Item = ({ item, onClick, onDoubleClick }) => {
  return (
    <Form.Label className={`px-2 m-0 mt-1 ${item.checked && "form-check-label"}`} onClick={onClick} onDoubleClick={onDoubleClick}>
      <p className="m-0 py-1">{item.name}</p>
    </Form.Label>
  );
}

export default Item;
