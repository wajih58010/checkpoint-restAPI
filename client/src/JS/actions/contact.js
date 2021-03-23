import {
  GET_CONTACTS,
  FAIL_CONTACTS,
  LOAD_CONTACTS,
  GET_CONTACT,
} from "../actionTypes/contact";
import axios from "axios";
export const getContacts = () => async (dispatch) => {
  dispatch({ type: LOAD_CONTACTS });
  try {
    let result = await axios.get("/api/contact"); //
    dispatch({ type: GET_CONTACTS, payload: result.data }); //{msg:"",contacts:[]};
  } catch (error) {
    dispatch({
      type: FAIL_CONTACTS,
      payload: error.response,
    });
  }
};

export const postContact = (id) => async (dispatch) => {
  try {
    await axios.post("/api/contact ,newUser");
    dispatch(getContacts());
  } catch (error) {
    dispatch({
      type: FAIL_CONTACTS,
      payload: error.response,
    });
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete("/api/contact/${id");
    dispatch(getContacts());
  } catch (error) {
    dispatch({
      type: FAIL_CONTACTS,
      payload: error.response,
    });
  }
};

export const editContact = (id, newContact) => async (dispatch) => {
  try {
    await axios.put("/api/contact/${id}", newContact);
    dispatch(getContacts());
  } catch (error) {
    dispatch({
      type: FAIL_CONTACTS,
      payload: error.response,
    });
  }
};

export const getContact = (id) => async (dispatch) => {
  try {
    let result = await axios.get("/api/contact/${id");
    dispatch({ type: GET_CONTACTS, payload: result.data });
  } catch (error) {
    dispatch({
      type: FAIL_CONTACTS,
      payload: error.response,
    });
  }
};
