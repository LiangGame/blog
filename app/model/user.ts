'use strict';

import { JsonProperty } from '@hubcarl/json-typescript-mapper';
import Model from './common';

export default class User extends Model {
  @JsonProperty('phoneNumber')
  public phoneNumber?: string;
  @JsonProperty('password')
  public password?: string;

  // constructor must be init everyone JsonProperty
  constructor() {
    super();
    this.phoneNumber = '';
    this.password = '';
  }
}
