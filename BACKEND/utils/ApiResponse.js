class ApiResponse {
  constructor(res) {
    this.res = res;
  }
  success(data, message = "Request successful") {
    return this.res.status(200).json({
      success: true,
      message,
      data,
    });
  }
}

export default ApiResponse;
