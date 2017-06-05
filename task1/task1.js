function isSwapped(A) {
  if (isSorted(A)) {
    return true;
  }
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length; j++) {
      if (A[i] > A[j]) {
        var temp = A[i];
        A[i] = A[j];
        A[j] = temp;
        if (isSorted(A)) {
          return true;
        }
        return false;
      }
    }
  }
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
