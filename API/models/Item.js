const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "An item needs a name"],
  },
  itemCode: String,
  batch_number: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: [true, "An item needs a price"],
  },
  quantity: {
    type: Number,
    default: 0,
  },
  date_restocked: Date,
  supplier: {
    type: mongoose.schema.objectId,
    ref: "Supplier",
  },
  createdAt: {
    select: false,
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    select: false,
    type: Date,
    default: Date.now,
  },
});

itemSchema.pre("save", function (next) {
  this.updatedAt = Date.now();

  next();
});

module.exports = mongoose.model("Item", itemSchema);
