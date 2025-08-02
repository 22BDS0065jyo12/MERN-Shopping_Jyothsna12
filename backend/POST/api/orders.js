router.post('/', async (req, res) => {
  try {
    const { items, shippingAddress, paymentMethodId, total } = req.body;

    const order = new Order({
      items,
      shippingAddress,
      paymentDetails: { paymentMethodId },
      total,
    });

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
