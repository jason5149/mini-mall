module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;
  const CategorySchema = new Schema({
    id: { type: Number },
    name: { type: String },
    level: { type: Number },
    parentId: { type: Number },
    sort: { type: Number },
    status: { type: Number },
    createTime: { type: Date },
    updateTime: { type: Date },
  }, {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  });

  return mongoose.model('Category', CategorySchema, 'Category');
};
