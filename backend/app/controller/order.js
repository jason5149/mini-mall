const Ctrl = require('egg').Controller;

class OrderCtrl extends Ctrl {
  async getOrders() {
    this.ctx.body = 'Hello Egg!';
  }
  async getOrder() {
    this.ctx.body = 'Hello Egg!';
  }
  async createOrder() {
    this.ctx.body = 'Hello Egg!';
  }
  async deleteOrder() {
    this.ctx.body = 'Hello Egg!';
  }
};

module.exports = OrderCtrl;
