module.exports = app => {
  const basePath = './routes';

  require(`${basePath}/common`)(app);
  require(`${basePath}/user`)(app);
};
