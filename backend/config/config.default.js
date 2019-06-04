module.exports = {
  keys: 'my-cookie-secret-key',
  logger: {
    level: 'DEBUG',
  },
  cors: {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  },
  security: {
    csrf: {
      enable: false,
    },
  },
  mongoose: {
    url: 'mongodb://47.103.50.83:27017/mini-mall',
    options: {},
  },
  middleware: ['errorHandler'],
  errorHandler: {
    match: '/api',
  },
};
