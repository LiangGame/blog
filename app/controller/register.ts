import { Controller, Context } from 'egg';

export default class RegisterController extends Controller {
  public async index(ctx: Context) {
    await ctx.render('register.js', {
      title: 'React Server Render',
      text: 'Egg + React + TypeScript + Webpack Server Side Render',
    });
  }
}
