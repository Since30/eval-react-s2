// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all restaurants from the database
    const restaurants = await tables.restaurants.readAll();

    // Respond with the restaurants in JSON format
    res.json(restaurants);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific restaurant from the database based on the provided ID
    const restaurant = await tables.restaurants.read(req.params.id);

    // If the restaurant is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the restaurant in JSON format
    if (restaurant == null) {
      res.sendStatus(404);
    } else {
      res.json(restaurant);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the restaurant data from the request body
  const restaurant = req.body;

  try {
    // Insert the restaurant into the database
    const insertId = await tables.restaurants.create(restaurant);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted restaurant
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const getGrades = async (req, res) => {
  const { id } = req.params;

  const grades = await tables.restaurants.getGrades(id);
  res.json(grades);
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
  getGrades,
};
