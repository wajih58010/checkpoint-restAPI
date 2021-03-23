const addContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // hanfling errors : name and email required
    if (!name || !email) {
      res.status(400).send({ msg: "Name & email are required  !!!" });
      return;
    }
    // hanfling errors : email is unique
    const contact = await Contact.findOne({ email });

    if (contact) {
      res.status(400).send({ msg: "contact already exist !!" });
      return;
    }
    const newContact = new Contact({
      name,
      email,
      phone,
    });

    await newContact.save();
    res.status(200).send({ msg: "Contact added successfully ...", newContact });
  } catch (error) {
    res.status(400).send({ msg: "Can not add Contact !!!", error });
  }
};

module.exports = controllers = { addContact };
