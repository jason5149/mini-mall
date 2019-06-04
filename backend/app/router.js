module.exports = app => {
  const routePath = './routes';

  require(`${routePath}/common`)(app);
  require(`${routePath}/user`)(app);
  require(`${routePath}/category`)(app);
  require(`${routePath}/commodity`)(app);
  require(`${routePath}/order`)(app);
};
