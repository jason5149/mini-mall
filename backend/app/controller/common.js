const { Controller } = require('egg');

class CommonCtrl extends Controller {
  async upload() {
    this.ctx.succ();
  }
};

module.exports = CommonCtrl;
