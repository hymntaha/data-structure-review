function findSum(arr,value){
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr.includes(value-arr[i])){
      result.push(arr[i],value-arr[i])
    }
  }
  if (result.length == 0) {
    return false;
  }
  return result.slice(0,2);
}
console.log(findSum([1,21,3,14,5,60,7,6], 81))
