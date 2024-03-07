const mysql = require('mysql2/promise');

// Configuration de la connexion MySQL
const pool = mysql.createPool({
  host: 'db', // ou 'localhost' si local
  user: 'root',
  password: 'password',
  database: 'CadeauxAnniv'
});

const giftModel = {
    getAllGifts: async () => {
        const [rows] = await pool.query('SELECT * FROM gifts');
        return rows;
    },
    addGift: async (gift) => {
        const [result] = await pool.query('INSERT INTO gifts (name, description, price) VALUES (?, ?)', [gift.name, gift.description, gift.price]);
        return result;
    },
    updateGift: async (id, gift) => {
        const [result] = await pool.query('UPDATE gifts SET name = ?, description = ?, price = ? WHERE id = ?', [gift.name, gift.description, gift.price, id]);
        return result;
    },
    deleteGift: async (id) => {
        const [result] = await pool.query('DELETE FROM gifts WHERE id = ?', [id]);
        return result;
    }
};

module.exports = giftModel;
