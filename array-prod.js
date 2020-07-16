function findProduct(arr) {
  var prod = 1;
  var prodArray= [];
  for (let i = 0; i < arr.length; i++) {
    prodArray[i] = prod;
    prod = prod * arr[i]
  }

  prod = 1;
  for (let i = arr.length - 1; i > -1; i--) {
    prodArray[i] *= prod;
    prod *= arr[i]
  }

  return prodArray
}

console.log(findProduct([1,2,3,4]))
// console.log(findProduct([4,6,8,0]))
