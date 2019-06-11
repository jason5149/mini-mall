class ExpError extends Error {
  constructor(code, message) {
    super(message);

    this.code = code;
    this.message = message;
  }
};

const ERROR_CODE = {
  USER_ALREADY_EXIST: 101,
  MISS_REQUIRED_PARAMETER: 102,
  PARAMETER_ERROR: 103,
  TOKEN_EXPIRED: 104,
  TOKEN_VERIFY_ERROR: 105,
};

module.exports = {
  ERROR_CODE,
  ExpError,
}
