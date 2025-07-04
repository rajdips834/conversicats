import bcrypt from "bcrypt";
import User from "../models/User";

export const signup = async (req, res) => {
  try {
    const { email, fullName, password, profilePic, bio } = req.body;

    if (!fullName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please fill all the fields", success: false });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      email,
      fullName,
      password: hashedPassword,
      profilePic,
      bio,
    });

    const token = generateAuthToken(newUser._id);
    res.json({ success: true, userData: token, newUser });
  } catch (err) {
    console.log(err.message);
    res.json({ message: err.message, success: false });

    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await User.findOne({ email });
    const isPasswordValid = bcrypt.compare(password, userData.password);
    if (!isPasswordValid) {
      return res.json({ success: false, message: "Invalid credentials" });
    }
    const token = generateAuthToken(userData._id);
    res.json({ success: true, userData, token, message: "Login successfull" });
  } catch (err) {
    console.log(err.message);
    res.json({ message: err.message, success: false });

    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};
