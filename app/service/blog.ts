import { Context, Service } from 'egg';
import { deserialize } from '@hubcarl/json-typescript-mapper';
import Colllection from '../lib/db/collection';
import Blog from '../model/blog';
import { RESTful } from './typings';
// import Condition from '../lib/condition';

export default class BlogService extends Service {
  private context: Context;

  private colllection: Colllection;

  constructor(ctx: Context) {
    super(ctx);
    this.context = ctx;
    this.colllection = new Colllection(ctx.db, 'blog');
  }

  public async query(data: Record<string, any>): Promise<RESTful> {
    const blogRule = {
      id: {
        type: 'string',
      },
    };
    this.context.validate(blogRule, data);
    const { id } = data;
    let result;

    try {
      result = await this.colllection.query({ id, del: 0 });
    } catch (e) {
      this.ctx.throw(500, 'remote response error', { message: e.message });
    }
    console.log(result);
    this.ctx.status = 201;
    return { code: 200, success: !!result, message: '请求成功', data: result };
  }

  public async create(data: Record<string, string>): Promise<RESTful> {
    const blogRule = {
      title: {
        type: 'string',
      },
      content: {
        type: 'string',
      },
      phoneNumber: {
        type: 'string',
      },
    };
    this.context.validate(blogRule, data);

    const blog = deserialize(Blog, data);
    let result;

    try {
      blog.id = this.context.db.getUniqueId();
      result = await this.colllection.add(blog);
    } catch (e) {
      this.ctx.throw(500, 'remote response error', { message: e.message });
    }

    this.ctx.status = 201;
    return { code: 200, success: result.affectedRows === 1, message: '请求成功', data: null };
  }

  public async update(data: Record<string, string>): Promise<RESTful> {
    const blogRule = {
      id: {
        type: 'string',
      },
      title: {
        type: 'string',
      },
      content: {
        type: 'string',
      },
      phoneNumber: {
        type: 'string',
      },
    };
    this.context.validate(blogRule, data);
    const { id } = data;

    const blog = deserialize(Blog, data);
    let result;

    try {
      result = await this.colllection.update({ id, del: 0 }, blog);
    } catch (e) {
      this.ctx.throw(500, 'remote response error', { message: e.message });
    }

    this.ctx.status = 201;
    return { code: 200, success: result.affectedRows === 1, message: '请求成功', data: null };
  }
}
