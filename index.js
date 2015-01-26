/**
 * year-seconds <https://github.com/datetime/year-seconds>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var daySeconds = require('day-seconds');
var yearDays = require('year-days');

/**
 * Get the number of seconds/milliseconds in leap/noleap year.
 *
 * **Example:**
 *
 * ```js
 * var yearSeconds = require('year-seconds');
 *
 * yearSeconds();
 * //=> 31536000000 milliseconds
 *
 * yearSeconds(false);
 * //=> 31536000000 milliseconds
 *
 * yearSeconds('str');
 * //=> 31536000000 milliseconds
 *
 * yearSeconds(/regex/gi);
 * //=> 31536000000 milliseconds
 *
 * yearSeconds([1, 2, 3]);
 * //=> 31536000000 milliseconds
 *
 * yearSeconds(2016);
 * //=> 31622400000 milliseconds
 *
 * yearSeconds(2016, true);
 * //=> 31622400 seconds
 *
 * yearSeconds(2014);
 * //=> 31536000000 milliseconds
 *
 * yearSeconds(2014, true);
 * //=> 31536000 seconds
 * ```
 *
 * @name yearSeconds
 * @param  {Number} `[year]` year number, pass to [year-days][year-days]
 * @param  {Boolean} `[bool]` when `true`, returns seconds, pass to [day-seconds][day-seconds]
 * @return {Number}
 * @api public
 */
module.exports = function yearSeconds(year, bool) {
  if (year && typeof year === 'boolean') {
    bool = year;
  }
  return yearDays(year) * daySeconds(bool);
};
