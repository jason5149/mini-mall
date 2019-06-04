const Ctrl = require('egg').Controller;

class CommonCtrl extends Ctrl {
  async upload() {
    this.ctx.body = 'Hello Egg!';
  }
};

module.exports = CommonCtrl;
