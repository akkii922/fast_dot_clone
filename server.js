require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000; // Use uppercase PORT
const Routes = require("./app/routes");

app.use(cors());
app.use("/", Routes); // Mount routes from Routes module

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
