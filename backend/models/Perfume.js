import mongoose from "mongoose";

const PerfumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    top_notes: { type: String, required: true },
    middle_notes: { type: String, required: true },
    base_notes: { type: String, required: true },

    size: { type: Number, enum: [100, 200], required: true },
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
      type: String,
      enum: ["Oud", "Saffron", "Tuberose"],
      required: true,
    },

    price: { type: Number, required: true },
  },
  { timestamps: true }
);

PerfumeSchema.methods.calculatePrice = function () {
  let price = this.size === 100 ? 89 : 129;

  // Adjust price based on intensity
  if (this.intensity === "Eau de Parfum") price += 10;
  if (this.intensity === "Pure Parfum") price += 20;

  // Adjust price based on bottle material
  if (this.bottle_material === "Custom") price += 10;

  // Adjust price based on premium ingredients
  if (this.premium_ingredients === "Oud") price += 25;
  if (this.premium_ingredients === "Saffron") price += 15;
  if (this.premium_ingredients === "Tuberose") price += 10;

  return price;
};

const Perfume = mongoose.model("Perfume", PerfumeSchema);
export default Perfume;
