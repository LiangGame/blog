import { Context, Service } from 'egg';
import { deserialize } from '@hubcarl/json-typescript-mapper';
import Colllection from '../lib/db/collection';
import User from '../model/user';
import Article from '../model/article';
import Condition from '../lib/condition';

export default class LoginService extends Service {
  private context: Context;

  private colllection: Colllection;

  constructor(ctx: Context) {
    super(ctx);
    this.context = ctx;
    this.colllection = new Colllection(ctx.db, 'users');
  }

  public async login(data: Record<string, string>) {
    const { phoneNumber, password, remember } = data;
    const user = await this.colllection.query({ phoneNumber });

    if (!user) {
      this.ctx.status = 300;
      return { success: false, message: '账号不存在' };
    } else if (user.password !== password) {
      this.ctx.status = 300;
      return { success: false, message: '密码错误' };
    }
    // 选择记住密码存储cookie十天
    if (remember) {
      this.ctx.cookies.set('user', user.id, {
        maxAge: 1000 * 3600 * 24 * 10, // cookie存储一天 设置过期时间后关闭浏览器重新打开cookie还存在
        httpOnly: true, // 仅允许服务获取,不允许js获取
        signed: true, // 对cookie进行签名 防止用户修改cookie
        encrypt: true, // 是否对cookie进行加密 如果cookie加密那么获取的时候要对cookie进行解密
      });
    }
    this.ctx.status = 201;
    return { data: user };
  }

  public async register(data: object) {
    const userRule = {
      phoneNumber: {
        type: 'string',
        min: 11,
        max: 11,
      },
      password: {
        type: 'string',
        min: 6,
      },
    };
    this.context.validate(userRule, data);

    const user: User = deserialize(User, data);

    try {
      const res = await this.colllection.query(data);
      if (res) {
        this.ctx.status = 300;
        return { success: false, message: '账号已存在' };
      }
    } catch (e) {
      this.ctx.throw(500, 'remote response error', { message: e.message });
    }

    try {
      user.id = this.context.db.getUniqueId();
      await this.colllection.add(user);
    } catch (e) {
      this.ctx.throw(500, 'remote response error', { message: e.message });
    }

    this.ctx.status = 201;
    return { data: user.id };
  }

  public async saveArticle(data: object) {
    const article: Article = deserialize(Article, data);
    if (article.id) {
      return this.colllection.update({ id: article.id }, article);
    }
    article.id = this.context.db.getUniqueId();
    this.colllection.add(article);
    return article;
  }

  public async query(json: object) {
    return this.colllection.query(json);
  }

  public async deleteArticle(id: string) {
    return this.colllection.delete({ id });
  }
}
