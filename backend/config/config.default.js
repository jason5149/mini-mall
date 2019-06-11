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
  jwt: {
    secret: '363351',
  },
  middleware: ['errorHandler', 'requestHandler', 'authHandler'],
  errorHandler: {
    match: '/api',
  },
};
