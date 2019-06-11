module.exports = app => {
  const { router, controller } = app;

  const userRouter = router.namespace('/api/user');

  userRouter.get('/:id', app.jwt, controller.user.getUser);
  userRouter.post('/', controller.user.createUser);
  userRouter.put('/:id', controller.user.updateUser);
  userRouter.delete('/:id', controller.user.deleteUser);
  //
  userRouter.post('/login', controller.user.login);
  userRouter.delete('/login', controller.user.logout);
  userRouter.post('/register', controller.user.register);
};
