
import { Application } from 'egg';
export default (app: Application) => {
  const { router, controller } = app;
  // demo
  router.get('/demo/node', controller.demo.nodeData);
  router.get('/demo/async', controller.demo.asyncData);
  router.get('/demo/api/article', controller.demo.article);
  router.get('/api/blog/list', controller.blog.list);
  router.get('/api/blog/:id', controller.blog.detail);
  // blog
  router.get('/', controller.home.index);
  router.get('/blog', controller.blog.home);
  router.get('/login', controller.login.index);
  router.get('/register', controller.register.index);
  router.get('/md', controller.md.index);
  router.get('/md/:id', controller.md.index);
  // api
  router.resources('restful', '/api/:controller/:action', controller.api);
};
