import Subscribe from "../models/subscribeWithEmail.model.js";

export async function subscribeWithEmail(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email address is required" });
  }

  const emailExists = await Subscribe.findOne({ email: email });
  if (emailExists) {
    return res.status(400).json({ message: "Email already exists" });
  }
  try {
    const subscribe = new Subscribe({
      email,
    });

    const subscribee = await subscribe.save();
    console.log(`Inserted email address: ${email}`);
    return res
      .status(201)
      .json({ message: "Subscribed Successful", subscribee: subscribee });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export default subscribeWithEmail;
