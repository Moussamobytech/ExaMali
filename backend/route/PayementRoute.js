const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware.protect);

router.post('/mobile', paymentController.processMobilePayment);
router.post('/card', paymentController.processCardPayment);

module.exports = router;