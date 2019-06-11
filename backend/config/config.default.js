module.exports = {
  keys: 'my-cookie-secret-key',
  logger: {
    level: 'DEBUG',
  },
  cors: {
    origin: '*',
    allowMethods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
  },
  security: {
    csrf: {
      enable: false,
    },
  },
  mongoose: {
    url: 'mongodb://47.103.50.83:27017/mini-mall',
    options: {
      // server: {
      //   poolSize: 40,
      // },
    },
  },
  jwt: {
    secret: '123456',
  },
  middleware: ['errorHandler', 'requestHandler', 'authHandler'],
  errorHandler: {
    match: '/api',
  },
};
