const Order = require('../../models/order');

module.exports = {
  getCart,
  addToCart,
  getOrders,
}

async function getOrders(req, res) {
  try {
    const orders = await Order.getUserOrders(req.user._id)
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function addToCart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}


async function getCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.status(200).json(cart);
  }