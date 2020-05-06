import { Controller, Context } from 'egg';
// import { deserialize } from '@hubcarl/json-typescript-mapper/index';
// import Condition from '../lib/condition';

class ApiController extends Controller {
  // GET /api/controller/action/:id
  public async index(ctx: Context) {
    const { controller, action } = ctx.params;
    // const condition = deserialize(Condition, ctx.request.body);
    console.log(ctx.request.body);

    const data = await ctx.service[controller][action](ctx.request.body);
    ctx.body = {
      code: ctx.status,
      success: true,
      ...data,
    };
  }

  // POST /api/controller/action
  public async create(ctx: Context) {
    const { controller, action } = ctx.params;
    // const condition = deserialize(Condition, ctx.request.body);
    // console.log(ctx.request.body);

    const data = await ctx.service[controller][action](ctx.request.body);
    ctx.body = {
      code: ctx.status,
      success: true,
      ...data,
    };
  }

  // PUT /api/controller/action/:id
  public async update(ctx: Context) {
    const { controller, action } = ctx.params;
    // const condition = deserialize(Condition, ctx.request.body);
    console.log(ctx.request.body);

    const data = await ctx.service[controller][action](ctx.request.body);
    ctx.body = {
      code: ctx.status,
      success: true,
      ...data,
    };
  }

  // DELETE /api/controller/action/:id
  public async destroy(ctx: Context) {
    const { controller, action } = ctx.params;
    // const condition = deserialize(Condition, ctx.request.body);
    console.log(ctx.request.body);

    const data = await ctx.service[controller][action](ctx.request.body);
    ctx.body = {
      code: ctx.status,
      success: true,
      ...data,
    };
  }
}

module.exports = ApiController;
