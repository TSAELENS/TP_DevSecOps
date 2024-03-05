const express = require('express');
const giftListController = require('../controllers/giftListController');
const router = express.Router();

// Route pour créer une nouvelle liste de cadeaux
router.post('/lists', giftListController.createList);

// Ajoutez ici d'autres routes selon vos besoins, par exemple :
// router.get('/lists', giftListController.getAllLists);
// router.put('/lists/:id', giftListController.updateList);
// router.delete('/lists/:id', giftListController.deleteList);

module.exports = router;
