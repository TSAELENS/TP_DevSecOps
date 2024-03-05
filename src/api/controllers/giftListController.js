const GiftList = require('../models/giftListModel');

exports.createList = async (req, res) => {
  try {
    const newList = new GiftList(req.body);
    const savedList = await newList.save();
    res.status(201).json(savedList);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
};
