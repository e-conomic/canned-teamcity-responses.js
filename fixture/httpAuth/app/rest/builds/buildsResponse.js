"use strict";

module.exports = function (/* build... */) {
  var builds = Array.prototype.slice.call(arguments)
  return {
    count: builds ? builds.length : 0,
    build: builds || []
  }
}
