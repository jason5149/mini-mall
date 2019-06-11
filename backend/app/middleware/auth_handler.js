const { ERROR_CODE } = require('../utils/exception');

const pathFilters = [
  '/api/user/login',
  '/api/user/register',
];

module.exports = () => {
  return async function authHandler(ctx, next) {
    console.log(ctx);

    const { app, header, path, model } = ctx;

    if (pathFilters.indexOf(path) !== -1) {
      await next();
    }

    const { token } = header;

    const result = await app.jwt.verify(token, app.config.jwt.secret);
    const { username } = result;
    
    const isExist = await model.User.findOne({ username });
    console.log(isExist);

    if ((moment().valueOf() - moment(createTime).valueOf()) / 1000 > 30 * 24 * 60 * 60) {
      ctx.fail(ERROR_CODE.TOKEN_EXPIRED, 'token已过期，请重新登录');
    } else {

    }
    if (result) {
      await next();
    } else {
      
    }
  }
}
