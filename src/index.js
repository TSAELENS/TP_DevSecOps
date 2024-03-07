const express = require('express');
const mysql = require('mysql2/promise');
const giftListRoutes = require('./api/routes/giftListRoutes');

const app = express();
app.use(express.json()); // pour parser les corps de requêtes JSON


async function main() {
  const connection = await mysql.createConnection({
      host: 'db', // ou 'localhost' si local
      user: 'root',
      password: 'password',
      database: 'CadeauxAnniv'
  });
  
    console.log('Connexion à MySQL réussie !');

    app.use((req, res, next) => {
        req.db = connection;
        next();
    });

    app.use('/api', giftListRoutes);

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

main().catch(err => {
    console.error('Erreur de connexion à la base de données:', err);
});






