import Order from '../models/Order.js';

// controllers/orderController.js
exports.createOrder = async (req, res) => {
    const { amount } = req.body;
    
    const fakeOrder = {
      id: 'order_' + Math.random().toString(36).substr(2, 9),
      amount: amount,
      currency: 'INR',
      status: 'created'
    };
  
    res.json(fakeOrder);
  };
  