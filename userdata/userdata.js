const express = require("express");

const userData = express.Router();

userData.use(express.json());

const { createTableMethod, addUserDetailsMethod } = require("./methods");

userData
  .route("/create/user/table")
  .post(createTableMethod, async (requset, response) => {
    response.send("Successfully Created");
  });

userData
  .route("/add/user/details")
  .post(addUserDetailsMethod, async (request, response) => {
    const { addUserDetailsResponse } = request;
    response.send(addUserDetailsResponse);
  });

module.exports = userData;
