import { v2 as cloudinary } from "cloudinary";

const uplodeonCloudnary = async (localFile) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.MY_CLOUD_API_KEY,
    api_secret: process.env.MY_CLOUD_API_SECRET,
  });
  try {
    if (!localFile) return null;
    const response = await cloudinary.uploader.upload(localFile, {
      resource_type: "auto",
    });
    console.log(`file is uploading sucesfully on cloudnary ${response}`);
    return response;
  } catch (error) {
    console.log(`errer during uploading on cloudnary ${error}`);
  }
};

export default uplodeonCloudnary;
