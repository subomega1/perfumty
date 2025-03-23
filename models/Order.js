// models/Order.js
const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    perfume: { type: mongoose.Schema.Types.ObjectId, ref: 'Perfume', required: true },
    delivery_date: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'shipped', 'delivered'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);

OrderSchema.methods.updateStatus = function(newStatus) {
    this.status = newStatus;
    return this.save();
};