const express = require("express");
const recipesRouter = require("./routes/recipesRouter");
const blogsRouter = require("./routes/blogsRouter");
const favoritesRouter = require("./routes/favoritesRouter");
const mealplanRouter = require("./routes/mealplanRouter");

const hostname = "localhost";
const port = 3000;

const app = express();

app.use(express.json());

app.use("/recipes", recipesRouter);
app.use("/blogs", blogsRouter);
app.use("/favorites", favoritesRouter);
app.use("/mealplan", mealplanRouter);

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is my Mealplan server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
