const Item = require('../../models/item');

module.exports = {
  getAll,
}

async function getAll(req, res) {
  try {
    const items = await Item.find({}).populate('category').exec();
    res.status(200).json(items).data;
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}