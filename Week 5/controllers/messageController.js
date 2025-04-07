const Message = require('../models/messageModel');


exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.postMessage = async (req, res) => {
  const { message } = req.body;
  try {
    const newMsg = new Message({ message });
    await newMsg.save();
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
