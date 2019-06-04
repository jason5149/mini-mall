module.exports = app => {
  const { router, controller } = app;

  const commodityRouter = router.namespace('/api/commodity');

  commodityRouter.get('/', controller.commodity.getCommodities);
  commodityRouter.get('/:id', controller.commodity.getCommodity);
  commodityRouter.post('/', controller.commodity.createCommodity);
  commodityRouter.put('/:id', controller.commodity.updateCommodity);
  commodityRouter.delete('/:id', controller.commodity.deleteCommodity);
};
