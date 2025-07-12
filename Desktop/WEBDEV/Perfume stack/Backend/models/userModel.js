const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    requir: true,
  },
  role: {
    type: String,
    require: true,
    enum: ["Client", "Admin"],
  },
  perfume: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Perfume",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
