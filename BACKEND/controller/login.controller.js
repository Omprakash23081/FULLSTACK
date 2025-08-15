import ApiError from "../utils/ApiError.js";
const login = (req, res) => {
  const { fullName, email } = req.body;
  if (
    [fullName, email].some((field) => (field ? field.trim() === "" : false))
  ) {
    throw new ApiError(400, "Full name and email are required");
  }
  res.status(200).json({
    message: "Login successful",
  });
};

export default login;
