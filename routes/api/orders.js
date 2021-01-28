const express = require('express');
const router = express.Router();
const orderCtrl = require('../../controllers/api/orders');

router.get('/cart', orderCtrl.getCart);

module.exports = router;