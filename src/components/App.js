const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MongoDB Model for Gift List
const ListSchema = new mongoose.Schema({
  name: String,
  gifts: [{
    item: String,
    price: Number,
    originalPrice: Number,
    reserved: Boolean
  }]
});
const List = mongoose.model('List', ListSchema);

// API Endpoints
app.get('/lists', async (req, res) => {
  const lists = await List.find();
  res.json(lists);
});

app.post('/lists', async (req, res) => {
  const newList = new List(req.body);
  await newList.save();
  res.status(201).send(newList);
});

// Connect to MongoDB and start server
mongoose.connect('mongodb_connection_string', { useNewUrlParser: true })
  .then(() => app.listen(3000, () => console.log('Server running')))
  .catch(err => console.error(err));
