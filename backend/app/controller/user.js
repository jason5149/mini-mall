const Ctrl = require('egg').Controller;

class UserCtrl extends Ctrl {
  async getUser() {
    this.ctx.body = 'Hello Egg!';
  }
  async createUser() {
    this.ctx.body = 'Hello Egg!';
  }
  async updateUser() {
    this.ctx.body = 'Hello Egg!';
  }
  async deleteUser() {
    this.ctx.body = 'Hello Egg!';
  }
};

module.exports = UserCtrl;
