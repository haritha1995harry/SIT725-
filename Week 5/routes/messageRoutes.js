const express = require('express');
const router = express.Router();
const controller = require('../controllers/messageController');

router.get('/api/data', controller.getMessages);
router.post('/api/data', controller.postMessage);

module.exports = router;
