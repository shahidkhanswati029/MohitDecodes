// models/UserModel.js (CommonJS)
import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  googleId: String,
  githubId: String,
  profilePhoto: {
    type: String,
    default: "",
  }
  // For email signup
});

const User = mongoose.model("User", userSchema);

export default  User;
