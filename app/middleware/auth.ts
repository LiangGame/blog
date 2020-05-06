const Cryptojs = require('crypto-js');

const reg = /\/(.+)\/(.+)\/(.+)(\/)?/;
const md5 = Cryptojs.MD5;
const authRule = {
  timestamp: { type: 'number' },
  token: { type: 'string', min: 32, max: 32 },
};

module.exports = (options, app) => {
  return async (ctx, next) => {
    // 1.排除不需要验证 token 的路由
    if (options.allowed.indexOf(ctx.request.url) > -1) return next();

    // 2.校验参数
    ctx.validate(authRule, ctx.request.body);

    // 3. 获取 header 头token
    const { authorization = '' } = ctx.header;
    const { timestamp, token } = ctx.request.body;
    if (!authorization || !token) ctx.throw('你没有权限访问该接口!', 401);

    // 4. 校验时间戳
    const now = Date.now();
    if (timestamp > (now + 30000) || timestamp < (now - 30000)) {
      ctx.throw('无效的时间戳!', 401);
    }

    // 5. 校验token
    ctx.url && ctx.url.match(reg);
    const { $2: server, $3: action } = RegExp;
    const _token = md5(`${action + server + timestamp}${app.config.SECRET_KEY}`).toString();
    if (token !== _token && authorization !== _token) {
      ctx.throw('你没有权限访问该接口!', 401);
    }

    // 5. 继续执行
    await next();
  };
};
