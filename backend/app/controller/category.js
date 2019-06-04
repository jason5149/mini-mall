const Ctrl = require('egg').Controller;

class CategoryCtrl extends Ctrl {
  async getCategories() {
    const { ctx, service } = this;

    const result = await service.category.findCategoryList();

    ctx.body = result;
  }
  async getCategory() {
    this.ctx.body = 'Hello Egg!';
  }
  async createCategory() {
    this.ctx.body = 'Hello Egg!';
  }
  async updateCategory() {
    this.ctx.body = 'Hello Egg!';
  }
  async deleteCategory() {
    this.ctx.body = 'Hello Egg!';
  }
};

module.exports = CategoryCtrl;
