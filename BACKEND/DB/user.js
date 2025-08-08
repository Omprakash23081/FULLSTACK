import mongoose from "mongoose";

const Conect = async () => {
  try {
    const ref = await mongoose.connect(`${process.env.DB_NAME}/${DB_NAME}}`);
    console.log(`data base connected sucessfully ${ref}`);
  } catch (error) {
    console.log(`errer during connecting data base `);
  }
};
export default Conect;
