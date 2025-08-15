class ApiError extends Error {
  constructor(
    message = "Something went wrong",
    statusCode = 500,
    success = false,
    error = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.success = success;
    this.error = error;
    if (stack) this.stack = stack;
    else Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
