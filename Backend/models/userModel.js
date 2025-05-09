const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["Client", "Admin"],
    default: "Client",
  },
  perfume: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Perfume",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
