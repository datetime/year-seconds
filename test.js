/**
 * year-seconds <https://github.com/datetime/year-seconds>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var yearSeconds = require('./index');

describe('year-seconds:', function() {
  it('should get the number of milliseconds in a current year, when no args', function(done) {
    assert.strictEqual(yearSeconds(), 31536000000);
    done();
  });

  it('should get the number of seconds in a current year, when `year` is true', function(done) {
    assert.strictEqual(yearSeconds(true), 31536000);
    done();
  });

  it('should number of milliseconds in a current year, when `year` is otherwise', function(done) {
    assert.strictEqual(yearSeconds(false), 31536000000);
    assert.strictEqual(yearSeconds('str'), 31536000000);
    assert.strictEqual(yearSeconds(/regex/gi), 31536000000);
    assert.strictEqual(yearSeconds([1, 2, 3]), 31536000000);
    assert.strictEqual(yearSeconds({obj:true}), 31536000000);
    assert.strictEqual(yearSeconds(null), 31536000000);
    done();
  });

  it('should number of seconds, when `year` is 2016', function(done) {
    assert.strictEqual(yearSeconds(2016), 31622400000);
    done();
  });

  it('should number of seconds, when `year` is 2016 and `bool` true', function(done) {
    assert.strictEqual(yearSeconds(2016, true), 31622400);
    done();
  });

  it('should response be typeof number', function(done) {
    assert(typeof yearSeconds() === 'number');
    done();
  })
});
