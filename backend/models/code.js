const mongoose = require("mongoose");

const Code = mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
  },
  code: {
    type: String,
    required: [true, "code is required"],
  },
});

module.exports = mongoose.model("Code", Code);
