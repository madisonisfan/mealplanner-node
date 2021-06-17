const express = require("express");
const favoritesRouter = express.Router();

favoritesRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the user's favorites");
  })
  .post((req, res) => {
    res.end(`Will add the ${req.body.recipeName} recipe  to favorites`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /favorites");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /favorites");
  });

favoritesRouter
  .route("/:favoriteId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.statusCode = 403;
    res.end(
      `GET operation not supported on /favorites/${req.params.favoriteId}`
    );
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /favorites/${req.params.favoriteId}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(
      `PUT operation not supported on /favorites/${req.params.favoriteId}`
    );
  })
  .delete((req, res) => {
    res.end(`Removing favorite: ${req.params.favoriteId}`);
  });

module.exports = favoritesRouter;
