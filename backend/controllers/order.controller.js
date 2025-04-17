import Order from "../models/Order.js";
// create order
export const createOrder = async (req, res) => {
    try {
      const userId = req.user._id;
      const { perfumeId, sample, gift_message, delivery_date } = req.body;
  
      const perfume = await Perfume.findById(perfumeId);
      if (!perfume || perfume.userId.toString() !== userId.toString()) {
        return res.status(404).json({ error: "Perfume not found or unauthorized" });
      }
  
      let totalPrice = perfume.price;
      if (sample) {
        totalPrice *= 0.25;
      }
  
      const order = new Order({
        userId,
        perfumeId,
        sample: sample || false,
        gift_message,
        delivery_date,
        status: "Pending"
      });
  
      order.calculateShipping(totalPrice);
      await order.save();
  
      res.status(201).json({ message: "Order created successfully", order });
    } catch (error) {
      console.error("Error creating order:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  // get all client orders
  export const getClientOrders = async (req, res) => {
    try {
      const userId = req.user._id;
      const orders = await Order.find({ userId }).populate("perfumeId");
      res.status(200).json({ orders });
    } catch (error) {
      console.error("Error fetching orders:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  // get one client order
  export const getClientOrderById = async (req, res) => {
    try {
      const userId = req.user._id;
      const orderId = req.params.id;
  
      const order = await Order.findOne({ _id: orderId, userId }).populate("perfumeId");
      if (!order) {
        return res.status(404).json({ error: "Order not found or unauthorized" });
      }
  
      res.status(200).json({ order });
    } catch (error) {
      console.error("Error fetching order:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  