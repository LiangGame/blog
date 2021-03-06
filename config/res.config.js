'use strict';
// https://www.yuque.com/easy-team/egg-react/config
const path = require('path');

const resolve = (filepath) => path.resolve(__dirname, filepath);
module.exports = {
  entry: {
    login: 'app/web/page/login/index.tsx',
    register: 'app/web/page/register/index.tsx',
    home: 'app/web/page/home/index.tsx',
    blog: 'app/web/page/blog/index.tsx',
    md: 'app/web/page/md/index.tsx',
    'demo/node': 'app/web/page/demo/node.tsx',
    'demo/async': 'app/web/page/demo/async.tsx',
  },
  module: {
    rules: [
      {
        less: {
          include: [resolve('app/web'), resolve('../node_modules')],
          options: {
            javascriptEnabled: true,
            modifyVars: {
              'primary-color': 'red',
              'link-color': '#1DA57A',
              'border-radius-base': '4px',
            },
          },
        },
      },
      {
        typescript: true,
      },
      {
        eslint: true,
      },
    ],
  },
  plugins: [
    {
      imagemini: false,
    },
    {
      define: {
        'process.env': {
          SECRET_KEY: JSON.stringify('q&JiY4pQ8Y1M47Dy31biT5RDLqc@PuM4'),
        },
      },
    },
  ],
  alias: {
    '@': 'app/web',
  },
};
