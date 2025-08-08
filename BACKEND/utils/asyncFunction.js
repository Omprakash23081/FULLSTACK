const asyncFunction = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
      console.log(`gating errer during rsloving function ${err}`);
    });
  };
};
export default asyncFunction;
