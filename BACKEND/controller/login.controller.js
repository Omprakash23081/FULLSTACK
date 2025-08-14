import asyncFunction from "../utils/asyncFunction.js";

const login = (req, res) => {
  const { fullName, email } = req.body;
  console.log(fullName);
  console.log(email);
  res.status(200).json({
    message: "Login successful",
  });
};

export default login;
