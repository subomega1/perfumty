// repositories/OrderRepository.js
const Order = require('../models/Order');

class OrderRepository {
    async createOrder(orderData) {
        const order = new Order(orderData);
        order.calculateShipping(orderData.totalPrice);
        return await order.save();
    }
    
    async findById(orderId) {
        return await Order.findById(orderId).populate('userId').populate('perfumeId');
    }

    async findByUser(userId) {
        return await Order.find({ user: userId }).populate('perfume');
    }
}

module.exports = new OrderRepository();