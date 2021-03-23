import React, { useEffect } from "react";
// import { /*useDispatch,*/ useSelector } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../JS/actions/contact";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const dispatch = useDispatch();
  const listContact = useSelector((state) => state.contactReducer.contactList);
  const load = useSelector((state) => state.contactReducer.load);
  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {load ? (
        <h2>spinner</h2>
      ) : (
        listContact.map((el) => <ContactCard contact={el} key={el._id} />)
      )}
    </div>
  );
};

export default ContactList;
