import User from "../models/user.model.js";
import Contact from "../models/contact.model.js";
import Feedback from "../models/feedback.model.js";
import Subscribe from "../models/subscribeWithEmail.model.js";


export async function getAllUsers(req, res) {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No users found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
}


//delete User

export async function deleteUser(req, res) {
  const userId = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(400).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
}






//admin contacts

export async function getAllContacts(req, res) {
  try {
    const adminContacts = await Contact.find();
    if (!adminContacts || adminContacts.length === 0) {
      return res.status(400).json({ message: "No contacts found" });
    }
    return res.status(200).json(adminContacts);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
}

//delete unit contact

export async function deleteContact(req, res) {
  const contactId = req.params.id;

  try {
    const deletedContact = await Contact.findByIdAndDelete(contactId);
    if (!deletedContact) {
      return res.status(400).json({ message: "Contact not found" });
    }
    return res.status(200).json({ message: "Contact deleted" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
}


//Feedback 

export async function getAllFeedback(req, res) {
  try {
    const feedback = await Feedback.find();
    if (!feedback || feedback.length === 0) {
      return res.status(400).json({ message: "No feedback found" });
    }
    return res.status(200).json(feedback);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
}

//Feedback delete

export async function deleteFeedback(req, res) {
  const feedbackId = req.params.id;

  try {
    const deletedFeedback = await Feedback.findByIdAndDelete(feedbackId);
    if (!deletedFeedback) {
      return res.status(400).json({ message: "Feedback not found" });
    }
    return res.status(200).json({ message: "Feedback deleted" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
}


//Subscribe 

export async function getAllSubscribe(req, res) {
  try {
    const subscribe = await Subscribe.find();
    if (!subscribe || subscribe.length === 0) {
      return res.status(400).json({ message: "No subscribe found" });
    }
    return res.status(200).json(subscribe);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
}

//Subscribe delete

export async function deleteSubscribe(req, res) {
  const subscribeId = req.params.id;

  try {
    const deletedSubscribe = await Subscribe.findByIdAndDelete(subscribeId);
    if (!deletedSubscribe) {
      return res.status(400).json({ message: "Subscribe not found" });
    }
    return res.status(200).json({ message: "Subscribe deleted" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
}
