function removeEven(arr) {
  let oddsArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      oddsArray.push(arr[i])
    }
  }
  return oddsArray;
}

console.log(removeEven([1,2,4,5,10,6,3]))
