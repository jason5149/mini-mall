const Service = require('egg').Service;

class CategoryService extends Service {
  async findCategoryList() {
    const { ctx } = this;
    const { model } = ctx;
    
    // console.log(model.Category.find());
    const result = await model.Category.find({}, { _id: 0, __v: 0 });

    return result;
  }
};

module.exports = CategoryService;
