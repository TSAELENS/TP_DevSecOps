const express = require('express');
const giftListController = require('../controllers/giftListController');
const router = express.Router();

// Route pour créer une nouvelle liste de cadeaux
router.post('/lists', giftListController.createList);

// Route pour mettre à jour une liste de cadeaux
router.put('/lists/:id', giftListController.updateList);

// Route pour supprimer une liste de cadeaux
router.delete('/lists/:id', giftListController.deleteList);

// Route pour récupérer toutes les listes de cadeaux
router.get('/lists', giftListController.getAllLists);

// Route pour récupérer une liste de cadeaux spécifique
router.get('/lists/:id', giftListController.getListById);

module.exports = router;
