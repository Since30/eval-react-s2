const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const restaurantControllers = require("./controllers/restaurantControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

// Route to get the list of restaurants
router.get("/restaurants", restaurantControllers.browse);

// Route to get a specific restaurant by ID
router.get("/restaurants/:id", restaurantControllers.read);

router.get("/restaurants/:id/grades", restaurantControllers.getGrades);

// Route to add a new restaurant
router.post("/restaurants", restaurantControllers.add);

/* ************************************************************************* */

module.exports = router;
