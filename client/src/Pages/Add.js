import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editContact, postContact } from "../JS/actions/contact";

const Add = () => {
  const [contact, setContact] = useState({});
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.editReducer.edit);
  const contactToEdit = useSelector((state) => state.editReducer.contact);
  useEffect(() => {
    edit
      ? setContact(contactToEdit)
      : setContact({ name: "", email: "", phone: "" });
  }, [contactToEdit]);
  const handleData = () => {
    edit
      ? dispatch(editContact(contactToEdit._id, contact))
      : dispatch(postContact(contact));
  };
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <label> Name </label>
      <input name="name" value={contact.name} onChange={handleChange} />
      <label>EMAIL</label>

      <input name="email" value={contact.email} onChange={handleChange} />

      <label>phone </label>
      <input name="phone" value={contact.phone} onChange={handleChange} />
      <button onClick={handleData}>
        <Link to="/">{edit ? "edit" : "add"}</Link>
      </button>
    </div>
  );
};

export default Add;
