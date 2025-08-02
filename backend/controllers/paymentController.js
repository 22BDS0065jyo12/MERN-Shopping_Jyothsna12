import Razorpay from 'razorpay';
import Order from '../models/Order.js';
import crypto from 'crypto';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

export const createRazorpayOrder = async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: amount * 100,
    currency: 'INR',
    receipt: `receipt_${Date.now()}`
  };
  const order = await razorpay.orders.create(options);
  res.json(order);
};

export const verifyPayment = async (req, res) => {
  const { order_id, payment_id, signature } = req.body;
  const body = order_id + "|" + payment_id;

  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_SECRET)
    .update(body)
    .digest('hex');

  if (expectedSignature === signature) {
    await Order.findOneAndUpdate(
      { razorpayOrderId: order_id },
      { paymentStatus: 'paid' }
    );
    res.json({ message: 'Payment verified' });
  } else {
    res.status(400).json({ message: 'Invalid signature' });
  }
};
