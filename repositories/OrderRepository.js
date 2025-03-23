// repositories/OrderRepository.js
const Order = require('../models/Order');

class OrderRepository {
    async create(orderData) {
        return await Order.create(orderData);
    }
    
    async findByUser(userId) {
        return await Order.find({ user: userId }).populate('perfume');
    }
}

module.exports = new OrderRepository();