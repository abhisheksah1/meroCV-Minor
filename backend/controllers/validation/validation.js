import User from "../../models/user.model.js";
export default async function ({
  email,
  username,
  fullName,
  password,
  confirmPassword,
}) {
  if (password !== confirmPassword) {
    return { error: true, message: "Confirm password does not match" };
  }
  if (!email || !password || !confirmPassword || !username || !fullName) {
    return { error: true, message: "All fields are required" };
  }
  if (password.length < 6) {
    return { error: true, message: "Password at least 6 character" };
  }

  if (username.length < 4) {
    return { error: true, message: "Username at least 4 character" };
  }

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    return { error: true, message: "Email already exists" };
  }
  const usernameAlreadyExists = await User.findOne({ username });
  if (usernameAlreadyExists) {
    return { error: true, message: "username already exists" };
  }

  return { error: false };
}
