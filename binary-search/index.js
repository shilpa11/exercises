module.exports = binarySearch

function binarySearch (arr, value) {
  var startIndex = 0;
  var lastIndex = arr.length-1;
  var middle = Math.floor((startIndex + lastIndex)/2);

  while (arr[middle] != value && startIndex <= lastIndex) {
    if (arr[middle] > value) {
      lastIndex = middle - 1;
    } else if (arr[middle] < value) {
      startIndex = middle + 1;
    }
    middle = Math.floor((startIndex + lastIndex)/2);
  }
  return (arr[middle] != value ? -1 : middle);
}
