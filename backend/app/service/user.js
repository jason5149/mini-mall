const moment = require('moment');
const { Service } = require('egg');
const { ExpError, ERROR_CODE } = require('../utils/exception');

class UserService extends Service {
  async getUserInfoById() {}
  async createUserInfo() {}
  async updateUserInfo() {}
  async userLogin() {}
};

module.exports = UserService;
