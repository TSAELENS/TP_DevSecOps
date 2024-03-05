const express = require('express');
const mongoose = require('mongoose');
const giftListRoutes = require('./api/routes/giftListRoutes');

const app = express();

app.use(express.json()); // pour parser les corps de requêtes JSON
app.use('/api', giftListRoutes);

// Connectez-vous à MongoDB ici avec mongoose.connect()

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
