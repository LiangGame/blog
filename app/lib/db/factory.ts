'use strict';
import FileDB from './file';
import MongoDB from './mongo';
import MySQLDB from './mysql';

export default function (type?: string, pool?: any) {
  switch (type) {
    case 'mysql':
      return new MySQLDB(pool);
    case 'mongo':
      return new MongoDB('blog');
    default:
      return new FileDB();
  }
}
