import Contact from "../models/contact.model.js";

export async function contactRegister(req, res) {
  const { fullName, company, email, phoneNumber, message } = req.body;

  if (!fullName || !email || !message) {
    return res.status(400).json({ message: "Please provide fullName, email, and message" });
  }

  try {
    const contact = new Contact({
      fullName,
      company,
      email,
      phoneNumber,
      message,
    });

    await contact.save();
    return res.status(201).json({ message: "Contact created", contact });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export default contactRegister;

