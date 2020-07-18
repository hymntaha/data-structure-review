function rightRotate(arr,n){
  return (arr.splice(arr.length - n)).concat(arr.splice(0, arr.length))
}

console.log(rightRotate([300,-1,3,0],3))
