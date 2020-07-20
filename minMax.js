function maxMin(arr) {
  var result = []
  for (var i = 0; i < (Math.floor(arr.length / 2)); i++) {
    result.push(arr[arr.length - (i + 1)])
    result.push(arr[i])
  }

  if (arr.length % 2)
    result.push(arr[Math.floor(arr.length / 2)])
  return result
}

console.log(maxMin([1,2,3,4,5,6,7]))
