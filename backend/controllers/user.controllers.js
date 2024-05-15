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

    // Validate user input
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

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user object
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      username,
      confirmPassword,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

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
      from: "MeroCV <support@merocv.com>",
      to: savedUser.email,
      subject: "Registration Successful",
      html: ` <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              padding: 20px;
              margin: 0;
            }
            .container {
              max-width: 600px; 
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 5px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              padding: 40px
            }
            h1 {
              color: #333333;
              text-align: center;
              margin-bottom: 20px;
            }
            p {
              color: #666666;
              font-size: 16px;
              line-height: 1.6;
              margin-bottom: 15px;
            }
            .button {
              display: inline-block;
              padding: 12px 24px;
              background-color: #007bff;
              color: #ffffff;
              text-decoration: none;
              border-radius: 5px;
              text-align: center;
              transition: background-color 0.3s ease;
            }
            .button:hover {
              background-color: #0056b3;
            }
            .button-container {
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Welcome to MeroCV!</h1>
            <p>Your account has been successfully created. You can now log in and start using our services.</p>
            <p>To get started, create your professional resume:</p>
            <ol>
              <li>Login to your account.</li>
              <li>Click on the "Create new Resume" option.</li>
              <li>Follow the steps to enter your information and customize your resume.</li>
            </ol>
            <p>If you have any questions or need assistance, feel free to contact our support team.</p>
            <div class="button-container">
              <a href="mailto:merocv4@gmail.com" class="button">Contact via Gmail</a>
            </div>
          </div>
        </body>
      </html>
      `,
    };
    
    
    // Send the registration email
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
        return res.status(500).json({ message: "Error sending email" });
      }
      console.log("Registration successful email sent to:", savedUser.email);

      // Respond with success message and user details
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
    });
  } catch (error) {
    console.error("Error registering user:", error);
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

    // Email configuration
    const mailOptions = {
      from: "MeroCV <support@merocv.com>",
      to: user.email,
      subject: "Reset Password",
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h1 style="color: #007bff; text-align: center; margin-bottom: 30px;">Reset Your Password</h1>
        <p>Hello,</p>
        <p>We received a request to reset your password. If this was you, please click on the following link to reset your password:</p>
        <p style="text-align: center; margin-bottom: 20px;"><a href="http://localhost:5173/reset-password/${token}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px;">Reset Password</a></p>
        <p style="margin-bottom: 10px;">The link will expire in 5 minutes.</p>
        <p>If you didn't request a password reset, please ignore this email.</p>
        <p style="margin-top: 30px; font-size: 0.8em; color: #666666; text-align: center;">Thank you!</p>
        <p style="font-size: 0.8em; color: #666666; text-align: center;">MeroCV Support Team</p>
      </div>`
    };
    
    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_APP_EMAIL,
      },
    });

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
      return res.status(401).send({ message: "User not Found" });
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
