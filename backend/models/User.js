const pool = require('../config/db');

class User {
  static async findByPhone(phone) {
    const [rows] = await pool.execute('SELECT * FROM users WHERE phone = ?', [phone]);
    return rows[0];
  }

  static async create({ username, phone, password }) {
    const [result] = await pool.execute(
      'INSERT INTO users (username, phone, password) VALUES (?, ?, ?)',
      [username, phone, password]
    );
    return result.insertId;
  }

  static async findById(id) {
    const [rows] = await pool.execute('SELECT * FROM userspayement WHERE id = ?', [id]);
    return rows[0];
  }

  static async addSubscription(userId, subscriptionId) {
    await pool.execute(
      'UPDATE users SET subscription_id = ? WHERE id = ?',
      [subscriptionId, userId]
    );
  }
}

module.exports = User;