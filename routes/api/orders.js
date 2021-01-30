const express = require('express');
const router = express.Router();
const orderCtrl = require('../../controllers/api/orders');

router.get('/cart', orderCtrl.getCart);
router.get('/', orderCtrl.getComfirmation);
router.post('/cart/items/:id', orderCtrl.addToCart);
router.put('/cart/qty', orderCtrl.setItemQtyInCart);
router.post('/cart/checkout', orderCtrl.checkout);

module.exports = router;