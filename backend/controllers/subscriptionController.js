const Subscription = require('../models/Subscription');
const User = require('../models/User');

exports.createSubscription = async (req, res) => {
  try {
    const { userId, concours, plan, paymentMethod } = req.body;
    
    // Déterminer le montant en fonction du plan
    const planPrices = {
      monthly: 5000,
      quarterly: 12000,
      yearly: 40000
    };
    
    const amount = planPrices[plan];
    if (!amount) {
      return res.status(400).json({ message: 'Invalid subscription plan' });
    }

    // Calculer les dates de début et de fin
    const startDate = new Date();
    const endDate = new Date();
    
    if (plan === 'monthly') {
      endDate.setMonth(endDate.getMonth() + 1);
    } else if (plan === 'quarterly') {
      endDate.setMonth(endDate.getMonth() + 3);
    } else if (plan === 'yearly') {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }

    // Créer l'abonnement
    const subscriptionId = await Subscription.create({
      userId,
      concours,
      plan,
      amount,
      paymentMethod,
      startDate,
      endDate
    });

    // Ajouter l'abonnement à l'utilisateur
    await User.addSubscription(userId, subscriptionId);

    // Récupérer l'abonnement créé
    const subscription = await Subscription.findById(subscriptionId);

    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.checkSubscription = async (req, res) => {
  try {
    const { userId, concours } = req.params;
    
    const subscription = await Subscription.findActiveSubscription(userId, concours);
    res.json({ isSubscribed: !!subscription });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};