import { Controller, Context } from 'egg';

export default class MdController extends Controller {
  public async index(ctx: Context) {
    const phoneNumber = ctx.cookies.get('user', { encrypt: true });
    const { id } = ctx.params;

    const result = {
      title: 'React Server Render',
      text: 'Egg + React + TypeScript + Webpack Server Side Render',
      phoneNumber,
      blogId: id,
      scene: 'create',
      blogTitle: '',
      blogContent: '',
    };

    if (id) {
      const { success, data } = await ctx.service.blog.query({ id });
      if (success) {
        result.blogTitle = data.title;
        result.blogContent = data.content;
        result.scene = 'update';
      } else {
        ctx.status = 404;
        return;
      }
    }

    await ctx.render('md.js', result);
  }
}
