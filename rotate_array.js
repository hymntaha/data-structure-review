function rightRotate(arr,n){
  console.log(arr.splice(arr.length - n))
  console.log(arr.splice(0, arr.length))
  return (arr.splice(arr.length - n)).concat(arr.splice(0, arr.length))
}

console.log(rightRotate([1,2,3,4,5],3))
