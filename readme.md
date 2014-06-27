# year-seconds [![NPM version][npmjs-img]][npmjs-url] [![Build Status][travis-img]][travis-url] [![Dependency Status][depstat-img]][depstat-url]

> Get the number of seconds/milliseconds in leap/noleap year.


## Install [![Nodei.co stats][npmjs-install]][npmjs-url] 

> Install with [npm](https://npmjs.org)

```bash
$ npm install year-seconds
```


# Usage
```js
var yearSeconds = require('year-seconds');

yearSeconds()
//=> 31536000 seconds

yearSeconds(true)
//=> 31536000000 milliseconds

yearSeconds(2015)
//=> 31536000 seconds

yearSeconds(2015, true)
//=> 31536000000 milliseconds

yearSeconds(2016)
//=> 31622400 seconds

yearSeconds(2016, true)
//=> 31622400000 milliseconds
```


## Tests
> As usual `npm test` **or** if you have [mocha][mocha-url] globally `mocha`

```bash
$ npm test
```


## API

### leapYear([year[, ms]])

#### year

Type: `number`  
Default: current year

#### ms

Type: `boolean`  
Default: `false`



## Authors & Contributors [![author tips][author-gittip-img]][author-gittip]
**Charlike Mike Reagent**
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][author-website], [contributors](https://github.com/tunnckoCore/year-seconds/graphs/contributors).  
Released under the [`MIT`][license-url] license.


[mocha-url]: https://github.com/visionmedia/mocha

[npmjs-url]: http://npm.im/year-seconds
[npmjs-img]: http://badge.fury.io/js/year-seconds.svg
[npmjs-install]: https://nodei.co/npm/year-seconds.png?mini=true

[license-url]: https://github.com/tunnckoCore/year-seconds/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/tunnckoCore/year-seconds
[travis-img]: https://travis-ci.org/tunnckoCore/year-seconds.svg?branch=master

[depstat-url]: https://david-dm.org/tunnckoCore/year-seconds
[depstat-img]: https://david-dm.org/tunnckoCore/year-seconds.svg

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore

[author-website]: http://www.whistle-bg.tk
[author-npmjs]: https://npmjs.org/~tunnckocore
