const Item = require('../models/Item');

// Add item
exports.addItem = async (req, res) => {
  try {
    const { name, quantity, price } = req.body;
    const item = new Item({ name, quantity, price });
    await item.save();
    res.status(201).json({ message: 'Item added', item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
