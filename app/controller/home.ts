import { Controller, Context } from 'egg';

export default class HomeController extends Controller {

  public async index(ctx: Context) {
    await ctx.render('home.js', {
      title: 'React Server Render',
      text: 'Egg + React + TypeScript + Webpack Server Side Render'
    });
  }
}
