module.exports = app => {
  const { router, controller } = app;

  const categoryRouter = router.namespace('/api/category');

  categoryRouter.get('', controller.category.getCategories);
  categoryRouter.get('/:id', controller.category.getCategory);
  categoryRouter.post('/', controller.category.createCategory);
  categoryRouter.put('/:id', controller.category.updateCategory);
  categoryRouter.delete('/:id', controller.category.deleteCategory);
};
