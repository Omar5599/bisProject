const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post( '/api/cart', cartController.addProduct )
router.delete('/api/cart/', cartController.deleteProduct )
router.get('/api/cart/:ownerId', cartController.GetProductsInCartById)

module.exports = router;