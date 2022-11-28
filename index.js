// *use strict*

const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const connectDb = require("./config/db");
const bodyParser = require("body-parser");

// Config vars from local file
dotenv.config({
    path: "./config/config.env",
});

// Connection to Mongo Database
connectDb();
// Express app intialization
const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use('/api', require('./routes/api'));

const port = process.env.PORT || 1770;

// Start listneing port here
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

// Author :- Siddhesh Patil (siddhesh1770)
// hello@siddheshpatil.in
