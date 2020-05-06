'use strict';
import { JsonProperty } from '@hubcarl/json-typescript-mapper';
import * as moment from 'moment';

export default class Model {
  @JsonProperty('id')
  public id?: string;

  @JsonProperty('createdAt')
  public createdAt?: string;

  @JsonProperty('updatedAt')
  public updatedAt?: string;

  // constructor must be init everyone JsonProperty
  constructor() {
    this.id = '';
    this.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
    this.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss');
  }
}
