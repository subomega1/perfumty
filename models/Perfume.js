// models/Perfume.js
const PerfumeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    first_layer: { type: String, required: true },
    second_layer: { type: String, required: true },
    third_layer: { type: String, required: true },
    price: { type: Number, required: true },
    packaging: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Perfume', PerfumeSchema);

PerfumeSchema.methods.calculatePrice = function() {
    // Exemple de calcul de prix basé sur les couches
    return this.price;
};