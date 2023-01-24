const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "./public")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

const getRouter = require("./get/userdetails");
const userData = require("./userdata/userdata");

try {
  app.use("/api/get", getRouter);
  app.use("/api/post", userData);
} catch (e) {
  console.log(e);
} finally {
  app.listen(3005, () => {
    console.log("Server Running At http://localhost:3005");
  });
}
