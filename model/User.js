const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
  roles: {
    User: {
      type: Number,
      default: 2001,
    },
    Editor: {
      type: Number,
    },
    Admin: {
      type: Number,
    },
  },
});

module.exports = mongoose.model("User", userSchema);
