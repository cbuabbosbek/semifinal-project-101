import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  telegramId: {
    type: String,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
  },
  balance: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const User = new mongoose.model("User", userSchema);

export default User;
