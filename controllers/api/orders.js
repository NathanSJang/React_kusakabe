const Order = require('../../models/order');

module.exports = {
  getCart,
  addToCart,
  getComfirmation,
  setItemQtyInCart,
  checkout,
}

async function getComfirmation(req, res) {
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
  try {
    const cart = await Order.getCart(req.user._id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
async function setItemQtyInCart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.body.itemId, req.body.newQty);
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
async function checkout(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save()
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

