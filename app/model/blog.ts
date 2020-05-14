'use strict';

import { JsonProperty } from '@hubcarl/json-typescript-mapper';
import Model from './common';

export default class User extends Model {
  @JsonProperty('title')
  public title: string;
  @JsonProperty('content')
  public content: string;
  @JsonProperty('phoneNumber')
  public phoneNumber: string;
  @JsonProperty('online')
  public online: number; // 上下架 0: 下架; 1: 上架
  @JsonProperty('status')
  public status: number; // 审核状态 0: 待审核; 1: 审核通过; 2: 审核未通过
  @JsonProperty('del')
  public del: number; // 删除 0: 未删除; 1: 删除


  // constructor must be init everyone JsonProperty
  constructor() {
    super();
    this.title = '';
    this.content = '';
    this.phoneNumber = '';
    this.online = 0;
    this.status = 0;
    this.del = 0;
  }
}
