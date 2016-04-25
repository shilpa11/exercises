module.exports = map;

function map(arr,cb, thisArgs) {
  var newArr = new Array(arr.length);
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = cb.call(thisArgs, arr[i], i, arr);
  }
  return newArr;
}
