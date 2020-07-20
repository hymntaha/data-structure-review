function reArrange(arr) {
  let arrangedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arrangedArray.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arrangedArray.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > 0) {
      arrangedArray.push(arr[i]);
    }
  }

  return arrangedArray;

}


// REARRANGING IN PLACE
function reArrange2(arr) {
  var leftMostPosEle = 0, tmp;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (i != leftMostPosEle) {
        tmp = arr[i];
        arr[i] = arr[leftMostPosEle];
        arr[leftMostPosEle] = tmp;
      }
      leftMostPosEle += 1;
    }
  }
  return arr;

}
console.log(reArrange2([10,-1,20,4,5,-9,-6]))
