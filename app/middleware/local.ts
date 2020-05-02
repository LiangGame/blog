
import { Context } from 'egg';

export default function locals() : any {
  return async (ctx: Context, next: () => Promise<any>) => {
    ctx.locals.locale = ctx.query.locale || 'zh';
    ctx.locals.origin = ctx.request.origin;
    ctx.locals.url = ctx.request.url;
    await next();
  };
}
