'use strict';
import axios from 'axios';
// import Qs from 'qs';
import Cryptojs from 'crypto-js';
// axios.defaults.baseURL = 'http://127.0.0.1:7001';
axios.defaults.timeout = 15000;
axios.defaults.xsrfHeaderName = 'x-csrf-token';
axios.defaults.xsrfCookieName = 'csrfToken';
axios.defaults.headers['Content-Type'] = 'application/json';

const instance = axios.create();
const reg = /\/(.+)\/(.+)\/(.+)(\/)?/;
const md5 = Cryptojs.MD5;

// 添加一个请求拦截器
instance.interceptors.request.use((config) => {
  // Do something before request is sent
  config.url && config.url.match(reg);
  const { $2: server, $3: action } = RegExp;
  const timestamp = Date.now();
  const token = md5(`${action + server + timestamp}${process.env.SECRET_KEY}`).toString();
  config.headers.authorization = token;
  config.data = JSON.stringify(Object.assign({}, config.data, { token, timestamp }));
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

// 添加一个响应拦截器
instance.interceptors.response.use((response) => {
  // Do something with response data
  return response;
}, (error) => {
  // Do something with response error
  return Promise.reject(error);
});

export default instance;
// {
//   async post(url, json, locals: Record<string, any> = {}) {
//     const headers: any = {};
//     if (EASY_ENV_IS_NODE) {
//       headers['x-csrf-token'] = locals.csrf;
//       headers.Cookie = `csrfToken=${locals.csrf}`;
//     }
//     const res = await axios.post(`${locals.origin || ''}${url}`, json, { headers });
//     return res.data;
//   },
//   async get(url, locals: Record<string, any> = {}) {
//     const res = await axios.get(`${locals.origin || ''}${url}`);
//     return res.data;
//   },
// };
