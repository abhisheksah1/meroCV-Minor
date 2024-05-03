import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET || "default_secret";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign(
    { userId: userId },
    secretKey,
    {
      expiresIn: "1d",
    }
  );
  return token; // Return the token here
};

export default generateTokenAndSetCookie;
