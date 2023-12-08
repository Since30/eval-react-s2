const AbstractManager = require("./AbstractManager");

class RestaurantManager extends AbstractManager {
  constructor() {
    // Appel du constructeur de la classe parente (AbstractManager)
    // et passage du nom de la table "restaurants" comme configuration
    super({ table: "restaurants" });
  }

  // Opération de création (Create) pour les restaurants
  async create(restaurant) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, cuisine, borough) VALUES (?, ?, ?)`,
      [restaurant.name, restaurant.cuisine, restaurant.borough]
    );

    return result.insertId;
  }

  // Opérations de lecture (Read) pour les restaurants
  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }

  // Opération de mise à jour (Update) pour les restaurants
  async update(restaurant) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, cuisine = ?, borough = ? WHERE id = ?`,
      [restaurant.name, restaurant.cuisine, restaurant.borough, restaurant.id]
    );

    return result.affectedRows > 0;
  }

  // Opération de suppression (Delete) pour les restaurants
  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result.affectedRows > 0;
  }

  async getGrades(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM grades WHERE restaurant.id = ?`,
      [id]
    );

    return rows;
  }
}

module.exports = RestaurantManager;
