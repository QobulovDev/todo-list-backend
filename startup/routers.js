const express = require("express");
const cors = require('cors');
const fs = require('fs')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/public/assets/swagger.css"), 'utf8');

const todo = require("../routes/todo");
const user = require('../routes/user');
const category = require('../routes/category');
const auth = require('../routes/auth');
const errorMiddleware = require('../middleware/error')

module.exports = function(app) {
  // middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static('public'));
  app.use(cors());
  //run engine
  // app.set("view engine", "ejs");
  
  // routes
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));
  app.use("/api/todo", todo);
  app.use("/api/user", user);
  app.use("/api/auth", auth);
  app.use("/api/category", category);

  // root route
  // app.get("/", (req, res) => {
  //   res.render("index");
  // });

  app.use(errorMiddleware);
};