const express = require('express');
const router = express.Router();
const orderCtrl = require('../../controllers/api/orders');

router.get('/cart', orderCtrl.getCart);
router.get('/', orderCtrl.getOrders);
router.post('/cart/items/:id', orderCtrl.addToCart);

module.exports = router;