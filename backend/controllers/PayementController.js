// Dans paymentController.js

const axios = require('axios');

// Configuration Orange Money
const ORANGE_MONEY_CONFIG = {
  baseUrl: 'https://api.orange.com',
  merchantKey: process.env.ORANGE_MERCHANT_KEY,
  authToken: process.env.ORANGE_AUTH_TOKEN
};

exports.processOrangeMoneyPayment = async (req, res) => {
  try {
    const { subscriptionId, phone, amount } = req.body;
    
    // Étape 1: Obtenir un token d'accès
    const authResponse = await axios.post(
      `${ORANGE_MONEY_CONFIG.baseUrl}/oauth/v3/token`,
      new URLSearchParams({ grant_type: 'client_credentials' }),
      {
        headers: {
          'Authorization': `Basic ${Buffer.from(`${ORANGE_MONEY_CONFIG.merchantKey}:`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    
    const accessToken = authResponse.data.access_token;
    
    // Étape 2: Initier le paiement
    const paymentResponse = await axios.post(
      `${ORANGE_MONEY_CONFIG.baseUrl}/orange-money-mali/v1/payment`,
      {
        merchant_key: ORANGE_MONEY_CONFIG.merchantKey,
        amount,
        currency: 'XOF',
        order_id: `SUB-${subscriptionId}-${Date.now()}`,
        return_url: 'https://yourapp.com/payment/success',
        cancel_url: 'https://yourapp.com/payment/cancel',
        notify_url: 'https://yourapp.com/api/payments/orange/webhook',
        customer: {
          phone
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    // Étape 3: Rediriger l'utilisateur vers la page de paiement
    res.json({
      paymentUrl: paymentResponse.data.payment_url,
      paymentId: paymentResponse.data.payment_id
    });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Webhook pour recevoir les notifications de paiement
exports.orangeMoneyWebhook = async (req, res) => {
  try {
    const { payment_id, status, order_id } = req.body;
    
    if (status === 'SUCCESS') {
      // Extraire l'ID d'abonnement de l'order_id
      const subscriptionId = order_id.split('-')[1];
      
      // Mettre à jour l'abonnement
      await Subscription.updateStatus(subscriptionId, 'active');
      
      // Enregistrer l'ID de transaction
      await Subscription.updateTransactionId(subscriptionId, payment_id);
    }
    
    res.status(200).send('OK');
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).send('Error');
  }
};