module.exports = flatten

function flatten (arr) {
  var length = arr.length;
  var ret = [];
  for (var i=0; i<length; i++) {
    if(Array.isArray(arr[i])) {
      ret = ret.concat(flatten(arr[i]));
    } else {
      ret.push(arr[i]);
    }
  }
  return ret;
}
