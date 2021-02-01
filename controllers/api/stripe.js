const stripe = require('stripe')('sk_test_51IFth3LxbmCbUYW1DUSxYFego52g0TLMykjEdOeVMpey7MAxN8ATFsJOwRd1wH4ft3zYEjMYb8HEs9ZJXUQoVhDa00xdDZdPdC')

module.exports = {
  checkOut,
}

const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

async function checkOut(req, res) {
  const { items } = req.body;
  console.log(items)
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
};