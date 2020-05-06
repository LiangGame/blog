// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportCommon from '../../../app/model/common';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    Common: ReturnType<typeof ExportCommon>;
    User: ReturnType<typeof ExportUser>;
  }
}
