// require express
const express = require("express");
const Contact = require("../models/Contact");

//express router
const router = express.Router();

// require model contact
const contact = require("../models/Contact");

//require controller
const controller = require("../controllers/contact.controllers");

///////////// routes

/**
 * @desc : testing route
 * @path : http://localhost/7000/api/contacts/test
 * @method : Get
 * @data : no data
 * @access : public/private
 */
router.get("/test", (req, res) => {
  res.send("hello world");
});

/**
 * @desc : testing route
 * @path : http://localhost/7000/api/contacts/
 * @method : POST
 * @data : req.body
 * @access : public/private
 */
router.post("/", controller.addContact);

/**
 * @desc : het all contacts
 * @path : http://localhost/7000/api/contacts/
 * @method : GET
 * @data : no data
 * @access : public/private
 */
router.get("/", async (req, res) => {
  try {
    const listContacts = await Contact.find();
    res
      .status(200)
      .send({ msg: "This is the list of all Contacts ... !!!", listContacts });
  } catch (error) {
    res.status(400).send({ msg: "Can not get all Contacts !!!", error });
  }
});

/**
 * @desc : het all contacts
 * @path : http://localhost/7000/api/contacts/
 * @method : GET
 * @data : req.params.id
 * @access : public/private
 */
router.get("/:id", async (req, res) => {
  try {
    const contactToGet = await Contact.findOne({ _id: req.params.id });
    res.status(200).send({ msg: " I get the contact ..", contactToGet });
  } catch (error) {
    res.status(400).send({ msg: "can not get contact with this id !!", error });
  }
});

/**
 * @desc : delete contacts
 * @path : http://localhost/7000/api/contacts/
 * @method : delete
 * @data : req.params.id
 * @access : public/private
 */
router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await Contact.findOneAndDelete({ _id });
    res.status(200).send({ msg: "Contact deleted ..." });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "can not delete contact with this id !!", error });
  }
});

/**
 * @desc : edit contacts
 * @path : http://localhost/7000/api/contacts/
 * @method : put
 * @data : req.params.id & req.body
 * @access : public/private
 */

router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Contact.UpdateOne({ _id }, { $set: { ...req.body } });
    if (!result.nModified) {
      res.status(400).send({ msg: "Contact alrerady updated ..." });
      return;
    }
    res.status(200).send({ msg: "Contact updated ..." });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "can not delete contact with this id !!", error });
  }
});

module.exports = router;
