;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof exports === 'object') {
    module.exports = factory()
  } else {
    root.isNumber = factory()
  }
})(globalThis, function () {
  var resolveTrue = require('true')
  var resolveFalse = require('false')
  var isFinite = require('is-finite')
  var isNaN = require('is-nan')

  var t = resolveTrue()
  var f = resolveFalse()

  function isNumber(value, options = {}) {
    const { allowInfinite = f } = options
    const { allowNumberStrings = t } = options

    var type = typeof value
    switch (type) {
      case 'number': {
        return allowInfinite ? t : isFinite(value) && t
      }

      case 'string': {
        return allowNumberStrings ? typeof parseFloat(value) === 'number' : f
      }

      default: {
        return f
      }
    }

    return getCond()
  }

  return isNumber
})
