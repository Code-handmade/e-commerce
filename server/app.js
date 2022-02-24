require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
