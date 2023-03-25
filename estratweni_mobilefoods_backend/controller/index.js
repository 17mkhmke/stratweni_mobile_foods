// Import the express library
const express = require("express");
// Import the path library
const path = require("path");
// Import the body-parser library
const bodyParser = require("body-parser");
// Create an express router
const route = express.Router();
// Import the User and Product models
const { User, Product, Vacancies, Cart } = require("../model");
// Create instances of the User and Product models
const user = new User();
const product = new Product();
const vacancies = new Vacancies();
const cart = new Cart();

// Set up the route for the homepage
// This route matches either the root URL or /DigitalDawn
// It sends the index.html file located in the view directory
route.get("^/$|/ESTRATWENI", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../view/index.html"));
});

// Set up the routes for the user endpoints
// Login route
route.post("/login", bodyParser.json(), (req, res) => {
  user.SignIn(req, res);
});
// Retrieve all users route
route.get("/users", (req, res) => {
  user.retrieveUsers(req, res);
});
// Fetch single user route
route.get("/user/:id", (req, res) => {
  user.retrieveUser(req, res);
});
// Update user route
route.put("/user/:id", bodyParser.json(), (req, res) => {
  user.updateUser(req, res);
});
// Create user route
route.post("/register", bodyParser.json(), (req, res) => {
  user.register(req, res);
});
// Delete user route
route.delete("/user/:id", (req, res) => {
  user.deleteUser(req, res);
});

// Set up the routes for the product
// Fetch all products route
route.get("/menu", (req, res) => {
  product.retrieveProducts(req, res);
});
// Fetch single product route
route.get("/menu/:id", (req, res) => {
  product.retrieveProduct(req, res);
});
// Create product route
route.post("/AddMenu", bodyParser.json(), (req, res) => {
  product.addProduct(req, res);
});
// Update product route
route.put("/menu/:id", bodyParser.json(), (req, res) => {
  product.updateProduct(req, res);
});
// Delete product route
route.delete("/menu/:id", (req, res) => {
  product.deleteProduct(req, res);
});


// Set up the routes for the Vacancies endpoints
// Fetch all Vacancies route
route.get("/vacancies", (req, res) => {
  vacancies.retrieveVacancies(req, res);
});
// Fetch single Vacancy route
route.get("/vacancy/:id", (req, res) => {
  vacancies.retrieveVacancyById(req, res);
});
// Create Vacancy route
route.post("/AddVacancies", bodyParser.json(), (req, res) => {
  vacancies.addVacancy(req, res);
});
// Update Vacancy route
route.put("/vacancies/:id", bodyParser.json(), (req, res) => {
  vacancies.updateVacancy(req, res);
});
// Delete Vacancy route
route.delete("/vacancies/:id", (req, res) => {
  vacancies.deleteVacancy(req, res);
});

// Set up the routes for the CART endpoints
// Fetch all cart route
route.get("/cart", (req, res) => {
  cart.retrieveCarts(req, res);
});
// Fetch single cart route
route.get("/user/:id/cart", (req, res) => {
  cart.retrieveCart(req, res);
});
// Create cart route
route.post("/addCart", bodyParser.json(), (req, res) => {
  cart.addCart(req, res);
});
// Update cart route
route.put("/user/:id/cart/:id", bodyParser.json(), (req, res) => {
  cart.updateCart(req, res);
});
// Delete Cart route
route.delete("/user/:id/cart", (req, res) => {
  cart.deleteCart(req, res);
});
// Export the router
module.exports = route;
