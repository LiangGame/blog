'use strict';
import BaseDB from './base';
import Condition from '../condition';
import { PlainObject } from 'egg';

export default class MySQLDB extends BaseDB {
  constructor(pool?: any) {
    super(pool);
    this.name = process.env.npm_package_name;
    this.instance = pool;
  }

  public get(collectionName: string) {
    return this.instance.get(collectionName);
  }

  public query(collectionName: string, json: PlainObject) {
    return this.instance.get(collectionName, json);
  }

  public add(collectionName: string, json: PlainObject) {
    return this.instance.insert(collectionName, json);
  }

  public update(collectionName: string, where: PlainObject, json: PlainObject) {
    return this.instance.uodate(collectionName, json);
  }

  public delete(collectionName: string, field: any) {
    return this.instance.uodate(collectionName, field);
  }

  public getPager(collectionName: string, condition: Condition): any {
    return this.instance.select(collectionName, condition);
  }
}
