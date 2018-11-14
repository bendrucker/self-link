# self-link [![Build Status](https://travis-ci.org/bendrucker/self-link.svg?branch=master)](https://travis-ci.org/bendrucker/self-link) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/self-link.svg)](https://greenkeeper.io/)

> Generate a link to a path on the running web application


## Install

```
$ npm install --save self-link
```


## Usage

```js
var selfLink = require('self-link')

selfLink('/foo')
//=> https://www.my-current-host.domain/foo
```

## API

#### `selfLink(path)` -> `string`

##### path

*Required*  
Type: `string`

The path for the generated link. The path will be appending to the current protocol + host. In Node, the path will be `/`-prefixed and then returned.


## License

MIT © [Ben Drucker](http://bendrucker.me)
