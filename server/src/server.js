require("dotenv").config();

const { response } = require("express");
const express = require("express");
const db = require("./db/connect");

const application = express();

// application.get("/", (request, response) => {
//   response.send("It works");
// });

application.use(express.static("public"));

application.get("/services", (request, response) => {
  db.query(
    `
  SELECT services.id, services.name, services.description, services.price, categories.name as category
  FROM services
  JOIN categories ON categories.id = services.category_id
  WHERE active IS TRUE;
  `
  ).then((result) => response.json(result.rows));
});

application.listen(3001, () => {
  console.log("Server listening!");
});
