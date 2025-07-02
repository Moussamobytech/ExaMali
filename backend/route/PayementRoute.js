const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/PaymentController');
const authMiddleware = require('../middlewares/AuthMiddleware');

router.use(authMiddleware.protect);

router.post('/mobile', paymentController.processMobilePayment);
router.post('/card', paymentController.processCardPayment);

module.exports = router;