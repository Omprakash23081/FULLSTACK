import app from "./app.js";
import Conect from "./DB/user.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
Conect()
  .then(
    app.listen(PORT, () => {
      console.log(`app is lising on port ${PORT}`);
    })
  )
  .catch((err) => console.log(`errer during connecting data base ${err}`));
