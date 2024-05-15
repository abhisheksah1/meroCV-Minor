import Admin from "../models/admin.model.js";

import validation from "./validation/adminValidation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function adminRegister(req, res) {
  try {
    const { adminName, email, password, phoneNumber, confirmPassword } =
      req.body;

    // Validate user input
    const validateRegister = await validation({
      adminName,
      email,
      password,
      phoneNumber,
      confirmPassword,
    });
    if (validateRegister.error) {
      return res.status(400).json({ message: validateRegister.message });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new admin object
    const newAdmin = new Admin({
      adminName,
      email,
      phoneNumber,
      password:hashedPassword // Save hashed password
    });

    // Save the new admin to the database
    const savedAdmin = await newAdmin.save();

    res.status(200).json({
      message: "Admin created successfully",
      admin: {
        id: savedAdmin._id,
        email: savedAdmin.email,
        adminName: savedAdmin.adminName,
        phoneNumber: savedAdmin.phoneNumber,
        createdAt: savedAdmin.createdAt,
        updatedAt: savedAdmin.updatedAt,
      },
    });
  } catch (error) {
    console.error("Error registering admin:", error);
    return res
      .status(500)
      .json({ message: "Server Error during registration" });
  }
}

//Admin login function



export async function adminLogin(req, res) {
  try {
    const { email, password } = req.body;
    const checkAdmin = await Admin.findOne({ email });

    if (!checkAdmin) {
      return res.status(400).json({ message: "Email not found" });
    }

    const isMatch = await bcrypt.compare(password, checkAdmin.password || "");
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate token
    const token = jwt.sign({ id: checkAdmin._id }, "your_secret_key", { expiresIn: "1d" });

    res.status(200).json({
      message: "Admin logged in successfully",
      user: {
        id: checkAdmin._id,
        token: token,
        email: checkAdmin.email,
        createdAt: new Date(checkAdmin.createdAt).toString(),
        updatedAt: new Date(checkAdmin.updatedAt).toString(),
      },
    });
  } catch (error) {
    console.error("Error logging in admin:", error);
    return res.status(500).json({ message: "Server Error during login" });
  }
}
