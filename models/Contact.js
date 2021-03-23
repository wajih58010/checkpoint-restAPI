// require mongoose
const mongoose = require("mongoose");

// create contact schema
// const (schema) = mongoose
const schema = mongoose.Schema;

const contactSchema = new schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: Number,
});
