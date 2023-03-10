import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, handleDelete, handleEdit }) => {
  return (
    <div>
      <center
        className="center"
        style={{ fontSize: "30px", marginTop: "30px", marginBottom: "0px" }}
      >
        Contacts :
      </center>
      <div className="ContactList">
        {contacts.map((item) => (
          <ContactCard
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
