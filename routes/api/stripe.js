const express = require('express');
const router = express.Router();
const stripeCtrl = require('../../controllers/api/stripe');

router.post('/', stripeCtrl.checkOut)

module.exports = router;
