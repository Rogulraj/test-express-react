const express = require("express");

const getRouter = express.Router();

getRouter.use(express.json());

getRouter.route("/user").get(async (request, response) => {
  response.send("Rogulraj");
});

getRouter.route("/user/details").get(async (request, response) => {
  response.send({
    name: "Rogulraj S",
    age: 18,
    location: "Somanur",
  });
});

module.exports = getRouter;
