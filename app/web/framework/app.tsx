import React from 'react';
import ReactDOM from 'react-dom';
import { matchRoutes } from 'react-router-config';
// 热更新
import { AppContainer } from 'react-hot-loader';

async function asyncData(locals, router) {
  const { url } = locals;
  const matchRouteList = matchRoutes(router, url);
  const promises = matchRouteList.map(matchRoute => {
    const componentAsyncData = matchRoute.route.component.asyncData;
    return componentAsyncData instanceof Function ? componentAsyncData(locals, matchRoute) : null;
  });
  const list = await Promise.all(promises);
  return list.reduce((item: Record<string, any>, result: Record<string, any>) => {
    return { ...result, ...item };
  }, {});
}

type Root = HTMLElement | null;

function bootstrap(Entry) {
  if (EASY_ENV_IS_BROWSER) {
    const root: Root = document.getElementById('app');
    const renderMethod = root && root.childNodes.length > 0 ? 'hydrate' : 'render';
    ReactDOM[renderMethod](<Entry />, root);
    if (EASY_ENV_IS_DEV) {
      module.hot.accept(() => {
        ReactDOM[renderMethod](<Entry />, root);
      });
    }
    return;
  }
  return Entry;
}

const clientRender = (Com, method) => {
  const state = window.__INITIAL_STATE__;
  const root = document.getElementById('app');
  // Webpack 注入的静态变量，EASY_ENV_IS_DEV 开发模式
  if (EASY_ENV_IS_DEV) {
    ReactDOM[method](<AppContainer><Com {...state} /></AppContainer>, root);
    if (module.hot) {
      module.hot.accept();
    }
  } else {
    ReactDOM[method](<Com {...state} />, root);
  }
};

const serverRender = Com => {
  return Com;
};

function SSR(Com) {
  return EASY_ENV_IS_NODE ? serverRender(Com) : clientRender(Com, 'hydrate');
}

function CSR(Com) {
  return clientRender(Com, 'render');
}


export {
  asyncData,
  bootstrap,
  SSR,
  CSR,
};
