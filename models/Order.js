// models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    perfumeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Perfume', required: true },
    
    // Livraison et échantillon
    sample: { type: Boolean, default: false },
    shipping_cost: { type: Number, default: 7 },
    
    // Message cadeau
    gift_message: { type: String, maxlength: 250 },
    
    // Livraison
    delivery_date: { type: Date, required: true },
    status: { type: String, enum: ['Pending', 'Shipped', 'Delivered'], default: 'Pending' }
}, { timestamps: true });

// Calcul des frais de livraison
OrderSchema.methods.calculateShipping = function (totalPrice) {
    this.shipping_cost = totalPrice >= 150 ? 0 : 7;
};

module.exports = mongoose.model('Order', OrderSchema);
