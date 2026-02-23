// import express from "express";
const express = require("express");
// import path from "node:path";
const app = express();
// import usersRouter from "./routes/usersRouter.js";
const path = require("node:path");
const usersRouter = require("./routes/usersRouter");

// middleware for parsing form data and setting up our view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// routing all requests to the usersRouter
app.use("/", usersRouter);

// listening for requests on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app listening on port ${PORT}!`);
});
