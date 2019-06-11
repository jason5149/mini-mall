module.exports = app => {
  const { mongoose } = app;
  const { Schema } = mongoose;

  const UserSchema = new Schema({
    uid: { type: String, unique: true, required: true },
    username: { type: String, required: true },
    nickname: { type: String, default: '' },
    password: { type: String, required: true },
    gender: { type: Number, default: 0 },
    brithday: { type: Date, default: Date.now },
    credit: { type: Number, default: 0 },
    status: { type: Number, default: 1 },
    ip: { type: String, default: '' },
    avatar: { type: String, default: '' },
    loginTime: { type: Date, default: Date.now },
    createTime: { type: Date, default: Date.now },
    updateTime: { type: Date, default: Date.now },
  }, {
    versionKey: false,
    timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' },
  });

  return mongoose.model('User', UserSchema, 'User');
};
