import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const Conect = async () => {
  try {
    const ref = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
    console.log(`data base connected sucessfully ${ref.connection.host}`);
  } catch (error) {
    console.log(`errer during connecting data base come DB ${error} `);
  }
};
export default Conect;
