declare module '*.less';
declare module '*.png';
declare module '*.svg';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare var EASY_ENV_IS_NODE: boolean;
declare var EASY_ENV_IS_DEV: boolean;
declare var EASY_ENV_IS_BROWSER: boolean;
declare var process: {
  env: {
    SECRET_KEY: string;
    NODE_ENV: string
  }
};
interface Window {
  __INITIAL_STATE__: any;
  stores: any;
}
interface NodeModule {
  hot: {
    accept: any;
  }
}
