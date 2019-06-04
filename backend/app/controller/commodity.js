const Ctrl = require('egg').Controller;

class CommodityCtrl extends Ctrl {
  async getCommodities() {
    this.ctx.body = 'Hello Egg!';
  }
  async getCommodity() {
    this.ctx.body = 'Hello Egg!';
  }
  async createCommodity() {
    this.ctx.body = 'Hello Egg!';
  }
  async updateCommodity() {
    this.ctx.body = 'Hello Egg!';
  }
  async deleteCommodity() {
    this.ctx.body = 'Hello Egg!';
  }
};

module.exports = CommodityCtrl;
