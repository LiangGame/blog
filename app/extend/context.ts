'use strict';
import { Context } from 'egg';
import DB from '../lib/db/base';
import Cryptojs from 'crypto-js';
import jwt from 'jsonwebtoken';

export default {
  get db(this: Context): DB {
    return this.app.db;
  },
  get jwt() {
    return jwt;
  },
  crypto(value) {
    return Cryptojs.HmacSHA256(value, 'drw_admin888').toString();
  },
};
