<<<<<<< HEAD
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
=======
import Admin from "../models/admin.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import validation from "./validation/adminValidation.js";
import bcrypt from "bcrypt";

export async function adminRegister(req, res) {
  try {
    const { adminName, email, password, phoneNumber, confirmPassword } = req.body;

    // Validate user input
    const { error } = validation({ adminName, email, password, phoneNumber, confirmPassword });

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Check if email already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));

    // Create a new admin object
    const newAdmin = new Admin({
      adminName,
      email,
      phoneNumber,
      password: hashedPassword, // Save hashed password
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
        updatedAt: savedAdmin.updatedAt
      },
      token: token
    });
  } catch (error) {
    console.error("Error registering admin:", error);
    return res.status(500).json({ message: "Server Error during registration" });
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

    // Assuming generateTokenAndSetCookie sets a token as a cookie, make sure it's implemented correctly
    const token = generateTokenAndSetCookie(checkAdmin._id, res);

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
>>>>>>> 15a2524b3fa4966c4817fe7757e806ffb5c8fbc4
