const Order = require("../model/Buzz");

 const createOrder = async (req, res, next) => {
  try {
    const order = req.body;
    const existingOrder = await Order.findOne({ order_id: order.order_id });
    if (existingOrder) {
      throw new Error('Duplicate order ID');
    }
    const newOrder = await Order.create(order);
    res.json(newOrder);
  } catch (err) {
    next(err);
  }
};


// Update the order for a specific order ID
const updateOrder = async (req, res, next) => {
  try {
    const { order_id, delivery_date } = req.body;
    const updatedOrder = await Order.findOneAndUpdate(
      { order_id },
      { delivery_date },
      { new: true }
    );
    if (!updatedOrder) {
      throw new Error('Order not found');
    }
    res.json(updatedOrder);
  } catch (err) {
    next(err);
  }
};

// List all orders for a given date
const allList = async (req, res, next) => {
  try {
    const { date } = req.query;
    const orders = await Order.find({
      order_date: { $gte: new Date(date), $lt: new Date(date).setDate(new Date(date).getDate() + 1) },
    });
    res.json(orders);
  } catch (err) {
    next(err);
  }
};

// Query for a specific order with Order ID
const orderById =  async (req, res, next) => {
  try {
    const { order_id } = req.body;
    const order = await Order.findOne({ order_id });
    if (!order) {
      throw new Error('Order not found');
    }
    res.json(order);
  } catch (err) {
    next(err);
  }
};

// Delete an order by Order ID
const deleteOrder = async (req, res, next) => {
  try {
    const { order_id } = req.params;
    const deletedOrder = await Order.findOneAndDelete({ order_id });
    if (!deletedOrder) {
      throw new Error('Order not found');
    }
    res.json(deletedOrder);
  } catch (err) {
    next(err);
  }
};




exports.createOrder = createOrder;
exports.updateOrder = updateOrder;
exports.allList = allList;
exports.orderById = orderById;
exports.deleteOrder = deleteOrder;
