import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
  const token = jwt.sign(
    { userId }, // payload
    process.env.JWT_SECRET, // secret
    { expiresIn: "7d" } // optional: token expiration
  );
  return token;
};
