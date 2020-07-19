function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a,b)=> a-b)
}

console.log(mergeArrays([1,3,4,5],[2,6,7,8]))
