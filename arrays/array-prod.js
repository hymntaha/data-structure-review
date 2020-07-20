function findProduct(arr) {
  let product = [];
  let temp = 1;

  for (let i = 0; i < arr.length; i++) {
    product[i] = temp;
    temp = temp * arr[i]
  }

  // 1,1,3,12

  temp = 1;
  for (let i = arr.length - 1; i > -1; i--) {
    product[i] = temp * product[i];
    temp = arr[i] * temp;
  }
  return product;
}

console.log(findProduct([1,3,4,5]))
