import ApiError from "../utils/ApiError.js";
import { User } from "../model/user.modal.js";
const login = async (req, res) => {
  const { fullName, email } = req.body;

  //check is field is empty or not if not then proceed
  if (
    [fullName, email].some((field) => (field ? field.trim() === "" : false))
  ) {
    throw new ApiError(400, "Full name and email are required");
  }

  //check wather user is exist or not if not then givr errer massage user is not exist
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(404, "User is not found");
  }
};

export default login;
