/**
 * Imports
 */

var xargs = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var fn = xargs(add, times2, times3)

  t.equal(fn(4, 5), 23)
  t.end()
})

/**
 * Helpers
 */

function add (a, b) { return a + b }
function times2 (a) { return a * 2 }
function times3 (a) { return a * 3 }
