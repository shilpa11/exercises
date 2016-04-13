module.exports = curry

function curry(fn) {
  return function f1() {
    var args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    } else return function f2() {
      var args2 = Array.prototype.slice.call(arguments, 0);
      return f1.apply(null, args.concat(args2));
    }
  }
}
