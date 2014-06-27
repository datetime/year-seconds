/*!
 * year-seconds <https://github.com/tunnckoCore/year-seconds>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var yearSeconds = require('./');

it('should get the number of seconds in current year', function () {
  assert.strictEqual(yearSeconds(), 31536000);
});
it('should get the number of milliseconds in current year', function () {
  assert.strictEqual(yearSeconds(true), 31536000000);
});

it('should get seconds in 2016 (leap) year', function () {
  assert.strictEqual(yearSeconds(2016), 31622400);
});
it('should get milliseconds in 2016 (leap) year', function () {
  assert.strictEqual(yearSeconds(2016, true), 31622400000);
});

it('should response be typeof number', function () {
  assert(typeof yearSeconds() === 'number');
});
