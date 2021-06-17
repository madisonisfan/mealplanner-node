const express = require("express");
const mealplanRouter = express.Router();

mealplanRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the user's meaplan for the following 7 days");
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /mealplan");
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /mealplan");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /mealplan");
  });

module.exports = mealplanRouter;
