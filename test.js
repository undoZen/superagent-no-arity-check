'use strict';
var test = require('tape');
var request = require('superagent');
require('./index.js');

test('request#ennd()', function (t) {
  t.plan(1);
  request.get('none exists').ennd(function () {
    t.assert(arguments[0] instanceof Error);
  });
});
