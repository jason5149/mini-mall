module.exports = app => {
  const { router, controller } = app;

  const commonRouter = router.namespace('/api/common');

  commonRouter.post('/upload', controller.common.upload);
};
