import React, { useState } from "react";
import { Button, FormControl } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";

const AddContact = ({ show, handleClose, handleAdd }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function handleAddContact() {
    if (!name || !surname || !phone || !email) {
      alert("fill the blank");
      return;
    }

    let newObj = {
      name,
      surname,
      phone,
      email,
      id: Date.now(),
    };

    handleAdd(newObj);

    setName("");
    setSurname("");
    setPhone("");
    setEmail("");
    handleClose();
  }

  return (
    //    ---------------------------Modal start

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adding a contact</Modal.Title>
      </Modal.Header>
      <Modal.Body className="addModalBody">
        <div className="Form">
          <FormControl
            value={name}
            className="inpAdd"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="name"
          />
          <FormControl
            value={surname}
            className="inpAdd"
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            placeholder="surname"
          />
          <FormControl
            value={phone}
            className="inpAdd"
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="phone"
          />
          <FormControl
            value={email}
            className="inpAdd"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="dark" onClick={handleAddContact}>
          Add contact
        </Button>
      </Modal.Footer>
    </Modal>

    //    ---------------------------Modal end
  );
};

export default AddContact;
