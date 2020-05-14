import * as path from 'path';
import * as fs from 'fs';
import { EggAppConfig } from 'egg';

export default function (app: EggAppConfig) {
  const exports: any = {};

  exports.middleware = [
    'local',
    'errorHandler',
    'auth',
  ];

  exports.errorHandler = {
    match: '/api',
  };

  exports.auth = {
    match: '/api',
    allowed: [], // 不需要验证 token 的路由
  };

  exports.jwt = {
    secret: 'bcrypt',
    expiresIn: 60 * 60 * 2, // 2小时过期
  };

  exports.mysql = {
    client: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'wangji',
      database: 'blog',
    },
    app: true,
    agent: true,
  };

  exports.SECRET_KEY = 'q&JiY4pQ8Y1M47Dy31biT5RDLqc@PuM4';

  // exports.notfound = {
  //   pageUrl: '/',
  // };

  // exports.onerror = {
  //   errorPageUrl: (err, ctx) => {
  //     console.log(err, ctx);
  //     // ctx.errorPageUrl || '/';
  //   },
  // };

  return exports;
}
