const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add the Suppliers Name"],
  },
  logo_url: String,
  supplier_code: String,
  description: {
    type: String,
    required: [true, "Please provide a supplier description"],
  },
  totalStockValue: {
    type: Number,
    default: 0,
  },
  items: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Item",
    },
  ],
  createdAt: {
    select: false,
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    select: false,
    type: Date,
    default: Date.now(),
  },
});

// updating updatedAt property
SupplierSchema.pre("save", function (next) {
  this.updatedAt = Date.now();

  next();
});

module.exports = mongoose.model("Supplier", SupplierSchema);
