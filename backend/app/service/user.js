const moment = require('moment');
const { Service } = require('egg');
const { ExpError, ERROR_CODE } = require('../utils/exception');
const { generateUserId } = require('../utils/common');

class UserService extends Service {
  async findUserById() {
    const { params } = this.ctx;
    const { id } = params;

    if (!id) throw new ExpError(ERROR_CODE.MISS_REQUIRED_PARAMETER, '缺少参数id');

    const result = await this.ctx.model.User.findOne({ uid: id }, { _id: 0, ip: 0, password: 0 });

    return result;
  }
  async findUserByUsername() {
    const { params } = this.ctx;
    const { username } = params;

    if (!username) throw new ExpError(ERROR_CODE.MISS_REQUIRED_PARAMETER, '缺少参数username');

    const result = await this.ctx.model.User.findOne({ username }, { _id: 0, ip: 0, password: 0 });

    return result;
  }
  async createUser() {
    const { request } = this.ctx;
    const { body, ip } = request;
    const { username, password } = body;

    if (!username) throw new ExpError(ERROR_CODE.MISS_REQUIRED_PARAMETER, '缺少参数username');
    if (!password) throw new ExpError(ERROR_CODE.MISS_REQUIRED_PARAMETER, '缺少参数password');

    const isExist = await this.ctx.model.User.find({ username });

    if (isExist.length > 0) throw new ExpError(ERROR_CODE.USER_ALREADY_EXIST, '用户已存在');

    const params = {
      uid: generateUserId(),
      username,
      password,
      ip,
    };

    const userModel = new this.ctx.model.User(params);

    const result = await userModel.save();

    return !!result;
  }
  async login() {
    const { request, app } = this.ctx;
    const { body } = request;
    const { username, password } = body;

    if (!username) throw new ExpError(ERROR_CODE.MISS_REQUIRED_PARAMETER, '缺少参数username');
    if (!password) throw new ExpError(ERROR_CODE.MISS_REQUIRED_PARAMETER, '缺少参数password');

    const params = {
      username,
      password,
      createTime: moment().valueOf(),
    };

    const token = app.jwt.sign(params, app.config.jwt.secret);

    this.ctx.set('token', token);

    return;
  }
};

module.exports = UserService;
