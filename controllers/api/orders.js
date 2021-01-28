const Order = require('../../models/order');

module.exports = {
  getCart,
}

async function getCart(req, res) {
  const orders = await Order.getUserOrders(req.user._id);
  res.json(orders)
}