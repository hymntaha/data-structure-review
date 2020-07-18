function reArrange(arr) {
  var leftMostPosEle = 0, tmp;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (i != leftMostPosEle) {
        tmp = arr[i];
        arr[i] = arr[leftMostPosEle];
        arr[leftMostPosEle] = tmp;
      }
      leftMostPosEle += 1
    }
  }
  return arr;
}
console.log(reArrange([10,-1,20,4,5,-9,-6]
))

// -1, 10, 20, 4, 5, -9, -6
