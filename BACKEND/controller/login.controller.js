import asyncFunction from "../utils/asyncFunction.js";

const login = asyncFunction(async (req, res) => {
  res.status(200).json({
    message:
      "My name is omprakash kumar and i am third year student in g L Bajaj institute of technology.",
  });
});

export default login;
