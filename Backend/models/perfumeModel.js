const mongoose = require("mongoose");

const perfumeSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true, // URL or Cloudinary link
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    default: 0, // Optional: Manage inventory
  },
  email: {
    type: String,
    required: true,
  },
  // category: {
  //     type: String,
  //     enum: ["Men", "Women", "Unisex"],
  //     required: true
  // },
});

module.exports = mongoose.model("Perfume", perfumeSchema);
