const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware.protect);

router.post('/', subscriptionController.createSubscription);
router.get('/:userId/:concours', subscriptionController.checkSubscription);

module.exports = router;