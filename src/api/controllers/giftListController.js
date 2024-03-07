<<<<<<< HEAD
const giftModel = require('../model/giftListModel');
=======
const giftModel = require('../models/giftListModel');
>>>>>>> 0fd9d214cc546a9bafb042938b0dde76456b8adc

const giftController = {
    getAllGifts: async (req, res) => {
        const gifts = await giftModel.getAllGifts();
        res.json(gifts);
    },
    addGift: async (req, res) => {
        const result = await giftModel.addGift(req.body);
        res.status(201).json(result);
    },
    updateGift: async (req, res) => {
        const result = await giftModel.updateGift(req.params.id, req.body);
        res.status(200).json(result);
    },
    deleteGift: async (req, res) => {
        const result = await giftModel.deleteGift(req.params.id);
        res.status(200).json(result);
    }
};

module.exports = giftController;
