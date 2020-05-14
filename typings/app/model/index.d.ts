// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportBlog from '../../../app/model/blog';
import ExportCommon from '../../../app/model/common';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    Blog: ReturnType<typeof ExportBlog>;
    Common: ReturnType<typeof ExportCommon>;
    User: ReturnType<typeof ExportUser>;
  }
}
