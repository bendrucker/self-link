'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test('node', function (t) {
  var link = proxyquire('./', {
    'global/document': {}
  })
  t.equal(link('path'), '/path')
  t.end()
})

test('browser', function (t) {
  var link = proxyquire('./', {
    'global/document': {
      location: {
        protocol: 'https:',
        host: 'www.example.com'
      }
    }
  })
  t.equal(link('path'), 'https://www.example.com/path')
  t.end()
})
