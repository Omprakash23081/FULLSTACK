import ApiError from "../utils/ApiError.js";
import uplodeonCloudnary from "../utils/cloudnary.js";
import ApiResponse from "../utils/apiResponse.js";
import { User } from "../model/user.modal.js";
const register = async (req, res) => {
  const { fullName, email, password } = req.body;
  //check is field is empty or not if not then proceed
  if (
    [fullName, email, password].some((field) =>
      field ? field.trim() === "" : false
    )
  ) {
    throw new ApiError(400, "Full name, email and password are required");
  }
  //check wather user is exist or not if not then givr errer massage user is not exist
  const user = await User.findOne({ $or: [{ email }, { fullName }] });

  if (user) {
    throw new ApiError(404, "User is already exist");
  }
  //check avatar is present or not
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const imageLocalPath = req.files?.image[0]?.path;
  if (!avatarLocalPath || !imageLocalPath) {
    throw new ApiError(400, "Avatar and image are required");
  }

  //uplode these on cloudnary
  const avatarUrl = await uplodeonCloudnary(avatarLocalPath);
  const imageUrl = await uplodeonCloudnary(imageLocalPath);
  console.log("Avatar URL:", avatarUrl.url);
  console.log("Image URL:", imageUrl.url);

  //validation
  if (!avatarUrl) {
    throw new ApiError(400, "Avatar upload failed");
  }
  console.log("1");

  const newUser = await User.create({
    fullName,
    password: req.body.password,
    email,
    avatar: avatarUrl.url,
    image: imageUrl.url,
  });
  console.log("2");
  const createdUser = await User.findById(newUser._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(400, "somthing went wrong while creating user");
  }
  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "Registration successful"));
};

export default register;
