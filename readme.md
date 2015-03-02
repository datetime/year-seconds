## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Get the number of seconds/milliseconds in leap/noleap year.

## Install
```
npm i --save year-seconds
npm test
```


## API
> For more use-cases see the [tests](./test.js)

### [yearSeconds](./index.js#L55)
> Get the number of seconds/milliseconds in leap/noleap year.

- `[year]` **{Number}** year number, pass to [year-days][year-days]
- `[bool]` **{Boolean}** when `true`, returns seconds, pass to [day-seconds][day-seconds]
- `return` **{Number}**

**Example:**

```js
var yearSeconds = require('year-seconds');

yearSeconds();
//=> 31536000000 milliseconds

yearSeconds(false);
//=> 31536000000 milliseconds

yearSeconds('str');
//=> 31536000000 milliseconds

yearSeconds(/regex/gi);
//=> 31536000000 milliseconds

yearSeconds([1, 2, 3]);
//=> 31536000000 milliseconds

yearSeconds(2016);
//=> 31622400000 milliseconds

yearSeconds(2016, true);
//=> 31622400 seconds

yearSeconds(2014);
//=> 31536000000 milliseconds

yearSeconds(2014, true);
//=> 31536000 seconds
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014-2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/year-seconds
[npmjs-img]: https://img.shields.io/npm/v/year-seconds.svg?style=flat&label=year-seconds

[coveralls-url]: https://coveralls.io/r/datetime/year-seconds?branch=master
[coveralls-img]: https://img.shields.io/coveralls/datetime/year-seconds.svg?style=flat

[license-url]: https://github.com/datetime/year-seconds/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/datetime/year-seconds
[travis-img]: https://img.shields.io/travis/datetime/year-seconds.svg?style=flat

[daviddm-url]: https://david-dm.org/datetime/year-seconds
[daviddm-img]: https://img.shields.io/david/datetime/year-seconds.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/datetime/year-seconds/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), March 02, 2015_

[day-seconds]: https://github.com/datetime/day-seconds
[year-days]: https://github.com/datetime/year-days