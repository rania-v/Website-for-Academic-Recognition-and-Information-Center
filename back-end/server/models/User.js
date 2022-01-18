const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Include your name"]
  },
  email: {
    type: String,
    required: [true, "Please Include your email"]
  },
  password: {
    type: String,
    required: [true, "Please Include your password"]
  }
});


//this method search for a user by email and password.
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error({ error: "Invalid login details" });
  }
  // const isPasswordMatch = (password == user.password);
  if (password != user.password) {
    throw new Error({ error: "Invalid login details" });
  }
  return user;
};

const User = mongoose.model("User", userSchema);
module.exports = User;