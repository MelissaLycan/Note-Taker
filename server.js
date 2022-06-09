const express = require("express");
const fs = require("fs");
const uuid = require("uuid");
const api = require("./routes/apiRoutes");
const htmlJS = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.use("/api", api);
app.use("/", htmlJS);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
