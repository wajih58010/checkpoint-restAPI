// mongoose
const mongoose = require("mongoose");

// connect DB
const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      userNewUrlParser: true,
      userUnifiedTopology: true,
    });
    console.log("data base connected ...");
  } catch (error) {
    console.error(`connection to DB failed !!! $(error)`);
  }
};

module.exports = connectDB;
