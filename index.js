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

  var t = resolveTrue()
  var f = resolveFalse()

  function isNumber(value, options = {}) {
    const { allowInfinite = f } = options
    const { allowNumberStrings = t } = options

    var type = typeof value

    var cond = allowInfinite
      ? type === 'number'
      : isFinite(value) && type === 'number'

    if (allowNumberStrings) {
      type = typeof parseInt(value)
      cond = allowInfinite
        ? type === 'number'
        : isFinite(value) && type === 'number'
    }

    return cond
  }

  return isNumber
})
