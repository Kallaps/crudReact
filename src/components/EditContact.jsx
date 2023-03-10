import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditContact({
  handleEditClose,
  showEditModal,
  editContact,
  handleSave,
}) {
  const [contactToEdit, setContactToEdit] = useState(editContact);

  useEffect(() => {
    setContactToEdit(editContact);
  }, [editContact]);

  const editName = (e) => {
    let newObj = {
      ...contactToEdit,
      name: e.target.value,
    };
    setContactToEdit(newObj);
  };

  const editSurname = (e) => {
    let newObj = {
      ...contactToEdit,
      surname: e.target.value,
    };
    setContactToEdit(newObj);
  };

  const editPhone = (e) => {
    let newObj = {
      ...contactToEdit,
      phone: e.target.value,
    };
    setContactToEdit(newObj);
  };

  const editEmail = (e) => {
    let newObj = {
      ...contactToEdit,
      email: e.target.value,
    };
    setContactToEdit(newObj);
  };

  console.log(contactToEdit);

  return (
    <>
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              value={contactToEdit.name}
              onChange={editName}
              className="my-3"
              placeholder="Name"
            />
            <FormControl
              value={contactToEdit.surname}
              onChange={editSurname}
              className="my-3"
              placeholder="Surname"
            />
            <FormControl
              value={contactToEdit.phone}
              onChange={editPhone}
              className="my-3"
              placeholder="Phone"
            />
            <FormControl
              value={contactToEdit.email}
              onChange={editEmail}
              className="my-3"
              placeholder="Email"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSave(contactToEdit);
            }}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditContact;
