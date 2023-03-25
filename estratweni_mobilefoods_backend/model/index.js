// Database configuration
const database = require("../config");

// bcrypt module
const { hash, compare, hashSync } = require("bcrypt");

const bcrypt = require("bcrypt");

// Middleware for creating a token
const { createToken } = require("../middleware/AuthenticatedUser");

// User
class User {
  // This method is responsible for authenticating a user
  SignIn(req, res) {
    // Extract the email and password from the request body
    const { email, password } = req.body;

    // Construct a SQL query to select the user from the database
    const loginQRY = `
      SELECT first_name, last_name, password, email, user_role, user_image, phone_number, created_at, updated_at 
      FROM users
      WHERE email = '${email}';
    `;

    // Execute the query and handle the result
    database.query(loginQRY, async (err, data) => {
      if (err) throw err;
      if (!data.length || data == null) {
        // If no user was found with the given email, return an error
        res.status(401).json({
          err: "The email address is incorrect",
        });
      } else {
        // If a user was found, compare the password hash with the one in the database
        await bcrypt.compare(
          password,
          data[0].password,
          async (cErr, cResult) => {
            if (cErr) throw cErr;
            // If the passwords match, create a JWT token and save it as a cookie
            const jwToken = createToken({
              email,
              password,
            });
            res.cookie("LegitUser", jwToken, {
              maxAge: 3600000,
              httpOnly: true,
            });
            // Return a success message and the user data
            if (cResult) {
              res.status(200).json({
                msg: "Logged in",
                jwToken,
                result: data[0],
              });
            } else {
              // If the passwords don't match, return an error
              res.status(401).json({
                err: "You entered an invalid password or did not register. ",
              });
            }
          }
        );
      }
    });
  }

  // Retrieve all users
  retrieveUsers(req, res) {
    // SQL query to select all users
    const loginQRY = `
          SELECT user_id, first_name, last_name, password, email, user_role, user_image, phone_number, created_at, updated_at
          FROM users;
      `;

    // Send the SQL query to the database to retrieve all users
    database.query(loginQRY, (err, data) => {
      if (err) {
        // If an error occurred while retrieving the users, throw the error
        throw err;
      } else {
        // If there are no errors, send the retrieved data to the client
        res.status(200).json({ results: data });
      }
    });
  }

  // Fetch user information from the database
  retrieveUser(req, res) {
    // SQL query to select user information by ID
    const loginQRY = `
        SELECT user_id, first_name, last_name, email, user_role, user_image, phone_number, created_at, updated_at  
        FROM users
        WHERE user_id = ?;
    `;
    // Execute the query with the user ID as a parameter
    database.query(loginQRY, [req.params.id], (err, data) => {
      if (err) {
        // If there's an error, throw an exception
        throw err;
      } else {
        // If successful, return the user information as a JSON object
        res.status(200).json({ results: data });
      }
    });
  }

  // Create a new user and save their information in the database
  async register(req, res) {
    // Get user information from the request body
    let detail = req.body;
    // Hash the user's password using bcrypt with a cost factor of 15
    detail.password = await hash(detail.password, 15);
    // Set user information that will be used for authentication
    let user = {
      email: detail.email,
      password: detail.password,
    };
    // SQL query to insert a new user into the database
    const loginQRY = `
        INSERT INTO users
        SET ?;
    `;
    // Execute the query with user information as a parameter
    database.query(loginQRY, [detail], (err) => {
      if (err) {
        // If there's an error, return an error message
        res.status(401).json({ err });
      } else {
        // If successful, create a JSON Web Token and save it in a cookie with a duration of 1 hour
        const jwToken = createToken(user);
        res.cookie("LegitUser", jwToken, {
          maxAge: 3600000,
          httpOnly: true,
        });
        // Return a success message
        res.status(200).json({ msg: "A user record was saved." });
      }
    });
  }
  updateUser(req, res) {
    // Get the data from the request body
    let data = req.body;
    // If the user password is not null or undefined, hash the password
    if (data.userPass !== null || data.userPass !== undefined)
      data.userPass = hashSync(data.userPass, 15);
    // Set up the SQL query
    const loginQRY = `
        UPDATE users
        SET ?
        WHERE user_id = ?;
        `;
    // Execute the query and update the user record with the given ID
    database.query(loginQRY, [data, req.params.id], (err) => {
      if (err) throw err;
      // Return a success message with status code 200
      res.status(200).json({ msg: "A row was affected" });
    });
  }
  // This method deletes a user record from the database based on their ID
  deleteUser(req, res) {
    // SQL query to delete a user record based on their ID
    const loginQRY = `
    DELETE FROM users
    WHERE user_id = ?;
    `;
    // Execute the query using the ID parameter passed in the request
    database.query(loginQRY, [req.params.id], (err) => {
      if (err) throw err;
      // Return a success message indicating that a record was removed from the database
      res.status(200).json({ msg: "A record was removed from a database" });
    });
  }
}
//Remove and add for cart
class Cart{
  retrieveCart(req, res) {
    const loginQRY = `SELECT cart_item_id, user_id, foodMenu_id, quantity, created_at, updated_at
          FROM cart_items`;
    database.query(loginQRY, (err, results) => {
      if (err) throw err;
      res.status(200).json({results: results});
    });
  }
  addCart (req, res) {
    const loginQRY = `INSERT INTO cart_items
    SET ?;`;
    database.query(loginQRY, [req.body], (err) => {
      if (err) {
        // Return an error if the query fails
        res.status(400).json({ err: "Unable to insert a new record." });
      } else {
        // Return a success message if the query succeeds
        res.status(200).json({ msg: "Product saved" });
      }
    });
  }
  deleteCart(req, res) {
    const loginQRY = `
        DELETE FROM cart_items
        WHERE cart_item_id = ?;
        `;
    // Run the SQL query with the product id as a parameter
    database.query(loginQRY, [req.params.id], (err) => {
      if (err) res.status(400).json({ err: "The record was not found." });
      // Return a success message if the query succeeds
      res.status(200).json({ msg: "A product was deleted." });
    });
  }
}
class Vacancies {
  retrieveVacancies(req, res) {
    const loginQRY = `SELECT vacancy_id, position, salary, location, emailCV, description
        FROM vacancies`;
    database.query(loginQRY, (err, results) => {
      if (err) throw err;
      res.status(200).json({results: results});
    });
  }

  retrieveVacancyById(req, res) {
    const loginQRY = `SELECT vacancy_id, position, salary, location, emailCV, description, user_id
        FROM vacancies
        WHERE vacancy_id = ?;`;
    database.query(loginQRY, [req.params.id], (err, results) =>{
      if (err) throw err;
      res.status(200).json({results: results});
    });
  }

  addVacancy (req, res) {
    const loginQRY = `INSERT INTO vacancies
    SET ?;`;
    database.query(loginQRY, [req.body], (err) => {
      if (err) {
        // Return an error if the query fails
        res.status(400).json({ err: "Unable to insert a new record." });
      } else {
        // Return a success message if the query succeeds
        res.status(200).json({ msg: "Product saved" });
      }
    });
  }

  updateVacancy(req, res) {
    const loginQRY = `
        UPDATE vacancies
        SET ?
        WHERE vacancy_id = ?
        `;
    // Run the SQL query with the request body and product id as parameters
    database.query(loginQRY, [req.body, req.params.id], (err) => {
      if (err) {
        // Return an error if the query fails
        res.status(400).json({ err: "Unable to update a record." });
      } else {
        // Return a success message if the query succeeds
        res.status(200).json({ msg: "Product updated" });
      }
    });
  }
}

// A class for handling product-related operations
class Product {
  // Fetch all products
  retrieveProducts(req, res) {
    const loginQRY = `SELECT menu_id, menu_name, price, 
        img_url, menu_category, menu_description, menu_type, created_at, updated_at
        FROM menu;`;
    // Run the SQL query
    database.query(loginQRY, (err, results) => {
      if (err) throw err;
      // Return the query results
      res.status(200).json({ results: results });
    });
  }
  // Fetch a specific product using the product id
  retrieveProduct(req, res) {
    const loginQRY = `SELECT menu_id, menu_name, price, 
    img_url, menu_category, menu_description, menu_type, created_at, updated_at
        FROM menu
        WHERE menu_id = ?;`;
    // Run the SQL query with a parameterized query
    database.query(loginQRY, [req.params.id], (err, results) => {
      if (err) throw err;
      // Return the query results
      res.status(200).json({ results: results });
    });
  }
  // Add a new product
  addProduct(req, res) {
    const loginQRY = `
        INSERT INTO menu
        SET ?;
        `;
    // Run the SQL query with the request body as the data
    database.query(loginQRY, [req.body], (err) => {
      if (err) {
        // Return an error if the query fails
        res.status(400).json({ err: "Unable to insert a new record." });
      } else {
        // Return a success message if the query succeeds
        res.status(200).json({ msg: "Product saved" });
      }
    });
  }
  // Update an existing product using the product id
  updateProduct(req, res) {
    const loginQRY = `
        UPDATE menu
        SET ?
        WHERE menu_id = ?
        `;
    // Run the SQL query with the request body and product id as parameters
    database.query(loginQRY, [req.body, req.params.id], (err) => {
      if (err) {
        // Return an error if the query fails
        res.status(400).json({ err: "Unable to update a record." });
      } else {
        // Return a success message if the query succeeds
        res.status(200).json({ msg: "Product updated" });
      }
    });
  }
  // Delete an existing product using the product id
  deleteProduct(req, res) {
    const loginQRY = `
        DELETE FROM menu_id
        WHERE menu_id = ?;
        `;
    // Run the SQL query with the product id as a parameter
    database.query(loginQRY, [req.params.id], (err) => {
      if (err) res.status(400).json({ err: "The record was not found." });
      // Return a success message if the query succeeds
      res.status(200).json({ msg: "A product was deleted." });
    });
  }
}

// Export the user and product class
module.exports = {
  User,
  Product,
  Cart,
  Vacancies,
};
