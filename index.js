/*!
 * year-seconds <https://github.com/tunnckoCore/year-seconds>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var daySeconds = require('day-seconds');
var yearDays = require('year-days');

module.exports = function yearSeconds(year, ms) {
  if (typeof year !== 'number') {
    ms = year;
  }
  return yearDays(year) * daySeconds(ms);
};
