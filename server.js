// 1 reequire express
const express = require(`express`);

// 2 instance express
const app = express();

// 5 require & cinfigure
require(`dotenv`).config();

// 8 Middleware bodyparser
app.use(express.json());

// 6 connect DB
const connectDB = require(`./config/connectDB`);
connectDB();

// 7 routes
const router = require("./routes/contact");
app.use("/api/contacts", router);

// 3port
const port = process.env.port;

// 4 create server
app.listen(port, (error) => {
  error
    ? console.error(`failed to connect to server !!!${errror}`)
    : console.log(`server is running on port ${port}...`);
});
