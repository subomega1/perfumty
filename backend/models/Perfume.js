import mongoose from "mongoose";

const PerfumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    top_notes: { type: [String], required: true },
    middle_notes: { type: [String], required: true },
    base_notes: { type: [String], required: true },

    size: { type: String, enum: ["100ml", "200ml"], required: true },
    intensity: {
      type: String,
      enum: ["Eau de Toilette", "Eau de Parfum", "Pure Parfum"],
      required: true,
    },
    bottle_material: {
      type: String,
      enum: ["Standard", "Custom"],
      required: true,
    },
    premium_ingredients: {
      type: [String],
      enum: ["Oud", "Saffron", "Tuberose"],
    },

    price: { type: Number, required: true },
  },
  { timestamps: true }
);

PerfumeSchema.methods.calculatePrice = function () {
  let price = this.size === "100ml" ? 89 : 129;

  if (this.intensity === "Eau de Parfum") price += 10;
  if (this.intensity === "Pure Parfum") price += 20;
  if (this.bottle_material === "Custom") price += 10;

  this.premium_ingredients.forEach((ingredient) => {
    if (ingredient === "Oud") price += 25;
    if (ingredient === "Saffron") price += 15;
    if (ingredient === "Tuberose") price += 10;
  });

  return price;
};

const Perfume = mongoose.model("Perfume", PerfumeSchema);
export default Perfume;
