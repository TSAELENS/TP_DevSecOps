const express = require('express');
const mongoose = require('mongoose');
const giftListRoutes = require('./api/routes/giftListRoutes');

const app = express();

app.use(express.json()); // pour parser les corps de requêtes JSON
app.use('/api', giftListRoutes);

mongoose.connect('mongodb://ma_db:27017/CadeauxAnniv', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
