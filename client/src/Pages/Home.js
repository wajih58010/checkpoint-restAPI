import React from "react";
import { useDispatch } from "react-redux";
import { toggleAdd } from "../JS/actions/edit";
import ContactList from "../components/ContactList";
import { Link } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="add">
        <button onClick={() => dispatch(toggleAdd())}>Add Contact</button>
      </Link>
      <button>ContactList contact</button>
      <ContactList />
    </div>
  );
};

export default Home;
