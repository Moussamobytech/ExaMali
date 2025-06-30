const pool = require('../config/db');

class Subscription {
  static async create({ userId, concours, plan, amount, paymentMethod, startDate, endDate, status = 'pending' }) {
    const [result] = await pool.execute(
      `INSERT INTO subscriptions 
        (user_id, concours, plan, amount, payment_method, start_date, end_date, status) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [userId, concours, plan, amount, paymentMethod, startDate, endDate, status]
    );
    return result.insertId;
  }

  static async findActiveSubscription(userId, concours) {
    const [rows] = await pool.execute(
      `SELECT * FROM subscriptions 
        WHERE user_id = ? AND concours = ? AND status = 'active' AND end_date > NOW()`,
      [userId, concours]
    );
    return rows[0];
  }

  static async updateStatus(subscriptionId, status) {
    await pool.execute(
      'UPDATE subscriptions SET status = ? WHERE id = ?',
      [status, subscriptionId]
    );
  }

  static async findById(subscriptionId) {
    const [rows] = await pool.execute('SELECT * FROM subscriptions WHERE id = ?', [subscriptionId]);
    return rows[0];
  }
}

module.exports = Subscription;