module.exports = () => {
  function succ(ctx) {
    return function(data, message = 'success') {
      ctx.body = {
        code: 0,
        data,
        message,
      };
    }
  }

  function fail(ctx) {
    return function(code, message = 'fail') {
      ctx.body = {
        code,
        message
      };
    }
  }

  return async function requestHandler(ctx, next) {
    ctx.set('Content-Type', 'application/json;charset=utf-8');

    ctx.succ = succ(ctx);
    ctx.fail = fail(ctx);

    await next();
  }
};
