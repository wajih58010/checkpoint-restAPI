import React from "react";
import { deleteContact, getContacts, getContact } from "../JS/actions/contact";
import { useDispatch } from "react-redux";
import { toggleEdit } from "../JS/actions/edit";
import { Link } from "react-router-dom";
const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(toggleEdit());
    dispatch(getContact(contact._id));
  };
  return (
    <div>
      <h2>{contact.name}</h2>
      <h2>{contact.email}</h2>
      <h2>{contact.phone}</h2>
      <Link to="/edit">
        {" "}
        <button onClick={handleEdit}>Edit</button>
      </Link>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        DELETE
      </button>
    </div>
  );
};

export default ContactCard;
