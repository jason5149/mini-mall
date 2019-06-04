module.exports = app => {
  const { router, controller } = app;

  const userRouter = router.namespace('/api/user');

  userRouter.get('/:id', controller.user.getUser);
  userRouter.post('', controller.user.createUser);
  userRouter.put('/:id', controller.user.updateUser);
  userRouter.delete('/:id', controller.user.deleteUser);
};
