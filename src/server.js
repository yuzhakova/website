const { response } = require('express')
const express = require('express')
const application = express()

application.get("/", (request, response) => {
  response.send('It works')
})

application.get("/services", (request, response) => response.json([
  {id: 1, label: "service A"},
  {id: 2, label: "service B"}

]))

application.listen(3000, () => console.log("Server listening!"))