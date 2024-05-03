import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import validation from "./validation/validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import bycrypt from "bcrypt";
import nodemailer from "nodemailer";

// register validate

export async function register(req, res) {
  try {
    const { fullName, email, password, username, confirmPassword } = req.body;
    const validateRegister = await validation({
      fullName,
      email,
      password,
      username,
      confirmPassword,
    });
    if (validateRegister.error) {
      return res.status(400).json({ message: validateRegister.message });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      username,
      confirmPassword,
    });

    const savedUser = await newUser.save();
    res.status(200).json({
      message: "User created successfully",
      user: {
        id: savedUser._id,
        email: savedUser.email,
        fullName: savedUser.fullName,
        username: savedUser.username,
        createdAt: new Date(savedUser.createdAt).toString(),
        updatedAt: new Date(savedUser.updatedAt).toString(),
      },
    });
  } catch (error) {
    console.error(error.message);
    // Send an error response
    return res.status(500).json({ message: "Server Error" });
  }
}

//login validate

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const checkEmail = await User.findOne({ email });

    if (!checkEmail) {
      return res.status(400).json({ message: "Email not found" });
    }

    const isMatch = await bcrypt.compare(password, checkEmail.password || "");
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = generateTokenAndSetCookie(checkEmail._id, res);
    res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: checkEmail._id,
        token: token,
        email: checkEmail.email,
        fullName: checkEmail.fullName,
        username: checkEmail.username,
        createdAt: new Date(checkEmail.createdAt).toString(),
        updatedAt: new Date(checkEmail.updatedAt).toString(),
      },
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
}

//user find

export async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.status(200).json({
      message: "User retrieved successfully",
      user: {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
        username: user.username,
        createdAt: new Date(user.createdAt).toString(),
        updatedAt: new Date(user.updatedAt).toString(),
      },
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
}

//forgot password logic

export async function forgetPassword(req, res) {
  try {
    const { email } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // If user not found, send error message
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Generate a unique JWT token for the user that contains the user's id
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5m", // Set the expiration time to 5 minutes
    });

    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_APP_EMAIL,
      },
    });

    // Email configuration
    const mailOptions = {
      from: "MeroCV  <support@merocv.com>",
      to: user.email,
      subject: "Reset Password",
      html: `<h1>Reset Your Password</h1>
      <p>Click on the following link to reset your password:</p>
      <a href="http://localhost:5173/reset-password/${token}">http://localhost:5173/reset-password/${token}</a>
      <p>The link will expire in 5 minutes.</p>
      <p>If you didn't request a password reset, please ignore this email.</p>`,
    };

    // Send the email
    transporter.sendMail(mailOptions, async (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
        return res.status(500).send({ message: "Error sending email" });
      }
      console.log("Password reset email sent to:", email);

      // Store the token and its expiration time in the user document
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 600000; // Set expiration time to 5 minutes from now
      await user.save();

      res.status(200).send({ message: "Email sent" });
    });
  } catch (err) {
    console.error("Forget password error:", err);
    res.status(500).send({ message: "Internal server error" });
  }
}

//reset-password logic

export async function resetPassword(req, res) {
  try {
    // Verify the token sent by the user
    const decodedToken = jwt.verify(req.params.token, process.env.JWT_SECRET);

    // If the token is invalid, return an error
    if (!decodedToken) {
      return res.status(401).send({ message: "Invalid token" });
    }

    // find the user with the id from the token
    const user = await User.findOne({ _id: decodedToken.userId });
    if (!user) {
      return res.status(401).send({ message: "no user found" });
    }

    // Hash the new password
    const salt = await bycrypt.genSalt(10);
    const updatedPassword = await bycrypt.hash(req.body.newPassword, salt);

    // Update user's password, clear reset token and expiration time
    user.password = updatedPassword;
    await user.save();

    // Send success response
    res.status(200).send({ message: "Password updated" });
  } catch (err) {
    // Send error response if any error occurs
    res.status(500).send({ message: err.message });
  }
}
