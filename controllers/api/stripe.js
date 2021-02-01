const stripe = require('stripe')('sk_test_51IFth3LxbmCbUYW1DUSxYFego52g0TLMykjEdOeVMpey7MAxN8ATFsJOwRd1wH4ft3zYEjMYb8HEs9ZJXUQoVhDa00xdDZdPdC')
const Order = require('../../models/order');

module.exports = {
  checkOut,
}

const calculateOrderAmount = total => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  
  return total * 100
};



async function checkOut(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    console.log(cart.orderTotal)
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      payment_method_types: ['card'],
      amount: calculateOrderAmount(cart.orderTotal),
      currency: "usd"
    });
    res.send({
      clientSecret: paymentIntent.client_secret
    })
    
  } catch (error) {
    console.log(error.message)
  }
};