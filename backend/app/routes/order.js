module.exports = app => {
  const { router, controller } = app;

  const orderRouter = router.namespace('/api/order');

  orderRouter.get('/', controller.order.getOrders);
  orderRouter.get('/:id', controller.order.getOrder);
  orderRouter.post('/', controller.order.createOrder);
  orderRouter.delete('/:id', controller.order.deleteOrder);
};
