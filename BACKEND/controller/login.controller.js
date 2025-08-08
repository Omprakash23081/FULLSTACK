import asyncFunction from "../utils/asyncFunction.js";

const login = asyncFunction(async (req, res) => {
  res.status(200).json({
    message: "My name is omprakash kumar.",
  });
});

export default login;
