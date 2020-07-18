function findFirstUnique(arr) {
  var newObj = {};

  for (var i = 0; i < arr.length-1; i++) {
    if (arr[i] in newObj) {
      newObj[arr[i]]++;
    } else {
      newObj[arr[i]] = 1;
    }
  }
  return Object.entries(newObj)[0][0]
}
console.log(findFirstUnique([ 9, 2, 3, 6,2, 6 ,9,0,3]))
