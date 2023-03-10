import React, { useState } from "react";
import AddContact from "./components/AddContact";
import ContactCard from "./components/ContactCard";
import ContactList from "./components/ContactList";
import EditContact from "./components/EditContact";
import Header from "./components/Header";
import video from "./components/images/video.mp4";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // modal add end--------------------------

  const [contacts, setContacts] = useState([]);
  // !------------------------------------------- create
  function handleAdd(newObj) {
    let newContacts = [...contacts];
    newContacts.push(newObj);
    setContacts(newContacts);

    console.log(contacts);
  }
  // ! -------------------------------------------  delete

  function handleDelete(id) {
    let newContacts = contacts.filter((item) => item.id !== id);
    setContacts(newContacts);
  }

  // ! -------------------------------------------  edit

  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  const [editContact, setEditContact] = useState({});

  function handleEdit(id) {
    let obj = contacts.filter((item) => item.id == id);
    setEditContact(obj[0]);
    handleEditShow();
    console.log(obj);
  }
  //!---------------------- save changes
  function handleSave(editedObj) {
    let newContacts = contacts.map((item) => {
      if (item.id === editedObj.id) {
        return editedObj;
      } else {
        return item;
      }
    });
    setContacts(newContacts);
    setShowEditModal(false);
  }

  return (
    <div style={{ position: "relaitve" }}>
      <Header handleShow={handleShow} />
      <AddContact handleAdd={handleAdd} show={show} handleClose={handleClose} />
      <ContactList
        contacts={contacts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      {showEditModal && (
        <EditContact
          showEditModal={showEditModal}
          handleEditClose={handleEditClose}
          editContact={editContact}
          handleSave={handleSave}
        />
      )}
      <video
        className="video"
        autoplay
        muted
        loop
        style={{ position: "absolute", zIndex: "-1" }}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default App;
