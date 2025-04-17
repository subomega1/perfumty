import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    perfumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Perfume",
      required: true,
    },

    sample: { type: Boolean, default: false },
    shipping_cost: { type: Number, default: 7 },

    gift_message: { type: String, maxlength: 250 },

    delivery_date: { type: Date, required: true },
    status: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

OrderSchema.methods.calculateShipping = function (totalPrice) {
  this.shipping_cost = totalPrice >= 150 ? 0 : 7;
};

const Order = mongoose.model("Order", OrderSchema);
export default Order;
