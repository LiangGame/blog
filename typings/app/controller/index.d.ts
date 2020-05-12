// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApi from '../../../app/controller/api';
import ExportBlog from '../../../app/controller/blog';
import ExportDemo from '../../../app/controller/demo';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/login';
import ExportRegister from '../../../app/controller/register';

declare module 'egg' {
  interface IController {
    api: ExportApi;
    blog: ExportBlog;
    demo: ExportDemo;
    home: ExportHome;
    login: ExportLogin;
    register: ExportRegister;
  }
}
