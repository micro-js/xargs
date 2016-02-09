/**
 * Modules
 */

var identity = require('@f/identity')

/**
 * Expose xargs
 */

module.exports = xargs

/**
 * xargs
 */

function xargs (fn /*, ...xf */) {
  var xf = []

  // Write out inline for loop to avoid v8 optimization bailout:
  // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
  for (var i = 1; i < arguments.length; i++) {
    xf.push(arguments[i])
  }

  return function (/* ...args */) {
    var args = []

    for (var i = 0; i < arguments.length; i++) {
      args.push((xf[i] || identity)(arguments[i]))
    }

    return fn.apply(this, args)
  }
}
