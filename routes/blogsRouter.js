const express = require("express");
const blogsRouter = express.Router();

blogsRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the blog posts to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the ${req.body.postType} post by ${req.body.postCreator} with content: ${req.body.postContent}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /blogs");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /blogs");
  });

blogsRouter
  .route("/:blogId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(`Will send details of the post: ${req.params.blogId} `);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /blogs/${req.params.blogId}`);
  })
  .put((req, res) => {
    res.write(`Editing the post: ${req.params.blogId}\n`);
    res.end(`Will change the post type to ${req.body.postType}`);
  })
  .delete((req, res) => {
    res.end(`Deleting post: ${req.params.blogId}`);
  });

module.exports = blogsRouter;
