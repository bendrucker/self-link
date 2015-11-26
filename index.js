'use strict'

var location = require('global/document').location
var join = require('url-join')

var base = location
  ? [location.protocol, '://', location.host].join('')
  : ''

module.exports = selfLink

function selfLink (path) {
  return join(base, path)
}
