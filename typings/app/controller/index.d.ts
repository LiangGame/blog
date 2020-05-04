// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBlog from '../../../app/controller/blog';
import ExportDemo from '../../../app/controller/demo';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/login';

declare module 'egg' {
  interface IController {
    blog: ExportBlog;
    demo: ExportDemo;
    home: ExportHome;
    login: ExportLogin;
  }
}
