function isSwapped(A) {
  if (isSorted(A)) {
    return true;
  }
  return false;
}
function isSorted(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
    return true;
  }
}

module.exports = isSwapped;
