// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccess from '../../../app/middleware/access';
import ExportAuth from '../../../app/middleware/auth';
import ExportErrorHandler from '../../../app/middleware/error_handler';
import ExportLocal from '../../../app/middleware/local';

declare module 'egg' {
  interface IMiddleware {
    access: typeof ExportAccess;
    auth: typeof ExportAuth;
    errorHandler: typeof ExportErrorHandler;
    local: typeof ExportLocal;
  }
}
