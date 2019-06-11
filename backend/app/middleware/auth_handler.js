const moment = require('moment');
const { ExpError, ERROR_CODE } = require('../utils/exception');

const pathFilters = [
  '/api/user/login',
  '/api/user/register',
];

module.exports = () => {
  return async function authHandler(ctx, next) {
    const { app, header, path, model } = ctx;

    if (pathFilters.indexOf(path) !== -1) {
      next();
    }

    const { token } = header;

    try {
      const result = await app.jwt.verify(token, app.config.jwt.secret);  
      
      const { username, createTime } = result;

      const isExist = await model.User.findOne({ username });

      if (!isExist) throw new ExpError(ERROR_CODE.TOKEN_VERIFY_ERROR, 'token无效，请重新登录');
      if ((moment().valueOf() - moment(createTime).valueOf()) / 1000 > 30 * 24 * 60 * 60) new ExpError(ERROR_CODE.TOKEN_EXPIRED, 'token已过期，请重新登录');

      await next();
    } catch ({ code = ERROR_CODE.TOKEN_VERIFY_ERROR, message = 'token无效，请重新登录' }) {
      ctx.fail(code, message);
    }
  }
}
