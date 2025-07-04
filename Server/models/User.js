import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    },
    password: {
      type: String,
      minlength: 8,
    },
    bio: {
      type: String,
      default: "Hey there! I am using Chat App",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
