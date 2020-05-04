import { Controller, Context } from 'egg';

export default class LoginController extends Controller {
  public async index(ctx: Context) {
    await ctx.render('login.js', {
      title: 'React Server Render',
      text: 'Egg + React + TypeScript + Webpack Server Side Render',
    });
  }
}
