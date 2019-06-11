const { Controller } = require('egg');

class UserCtrl extends Controller {
  async getUser() {
    try {
      const result = await this.service.user.findUserById();  

      this.ctx.succ(result);
    } catch ({ code = 500, message = '未定义错误' }) {
      this.ctx.fail(code, message);
    }
  }
  async createUser() {
    try {
      const result = await this.service.user.createUser();

      this.ctx.succ(result);
    } catch ({ code = 500, message = '未定义错误' }) {
      this.ctx.fail(code, message);
    }
  }
  async updateUser() {
    this.ctx.succ('update user');
  }
  async deleteUser() {
    this.ctx.succ('delete user');
  }
  async login() {
    try {
      const result = await this.service.user.login();  

      this.ctx.succ(result);
    } catch ({ code = 500, message = '未定义错误' }) {
      this.ctx.fail(code, message);
    }
  }
  async register() {
    this.ctx.succ('register');
  }
  async logout() {
    this.ctx.succ('logout');
  }
};

module.exports = UserCtrl;
