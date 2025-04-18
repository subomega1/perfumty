import Order from "../models/Order.js";
import Perfume from "../models/Perfume.js";
// create order
export const createOrder = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { perfumeId, sample, gift_message, delivery_date } = req.body;

    const perfume = await Perfume.findById(perfumeId);
    if (!perfume || perfume.userId.toString() !== userId.toString()) {
      return res
        .status(404)
        .json({ error: "Perfume not found " });
    }
    const orderExists = await Order.findOne({ perfumeId, userId });
    if (orderExists) {
      return res.status(400).json({ error: "Order already exists" });
    }

    let totalPrice = perfume.price;
    if (sample) {
      totalPrice += totalPrice * 0.25;
    }

    const order = new Order({
      userId,
      perfumeId,
      sample: sample || false,
      gift_message,
      delivery_date,
      status: "Pending",
    });

    order.calculateShipping(totalPrice);
    await order.save();

    res.status(201).json({
      message: "Order created successfully",
      order: {
        orderId: order._id,
        perfume: {
          top_notes: perfume.top_notes,
          middle_notes: perfume.middle_notes,
          base_notes: perfume.base_notes,
          size: perfume.size,
          intensity: perfume.intensity,
          bottle_material: perfume.bottle_material,
          premium_ingredients: perfume.premium_ingredients,
          price: perfume.price,
        },
        shipping_cost: order.shipping_cost,
        sample: order.sample,
        gift_message: order.gift_message,
        delivery_date: order.delivery_date,
        status: order.status,
      },
    });
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// get all client orders
export const getClientOrders = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const orders = await Order.find({ userId }).populate("perfumeId");

    const formattedOrders = orders.map((order) => ({
      orderId: order._id,
      perfume: {
        top_notes: order.perfumeId.top_notes,
        middle_notes: order.perfumeId.middle_notes,
        base_notes: order.perfumeId.base_notes,
        size: order.perfumeId.size,
        intensity: order.perfumeId.intensity,
        bottle_material: order.perfumeId.bottle_material,
        premium_ingredients: order.perfumeId.premium_ingredients,
        price: order.perfumeId.price,
      },
      shipping_cost: order.shipping_cost,
      sample: order.sample,
      gift_message: order.gift_message,
      delivery_date: order.delivery_date,
      status: order.status,
    }));

    res.status(200).json({ orders: formattedOrders });
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// get one client order
export const getClientOrderById = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const orderId = req.params.id;

    const order = await Order.findOne({ _id: orderId, userId }).populate(
      "perfumeId"
    );
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json({
      orderId: order._id,
      perfume: {
        top_notes: order.perfumeId.top_notes,
        middle_notes: order.perfumeId.middle_notes,
        base_notes: order.perfumeId.base_notes,
        size: order.perfumeId.size,
        intensity: order.perfumeId.intensity,
        bottle_material: order.perfumeId.bottle_material,
        premium_ingredients: order.perfumeId.premium_ingredients,
        price: order.perfumeId.price,
      },
      shipping_cost: order.shipping_cost,
      sample: order.sample,
      gift_message: order.gift_message,
      delivery_date: order.delivery_date,
      status: order.status,
    });
  } catch (error) {
    console.error("Error fetching order:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
