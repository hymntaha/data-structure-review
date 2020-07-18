function rightRotate(arr,n){
  var right_slice = arr.slice(n+1, arr.length)
  var left_slice = arr.slice(0,n+1)

  return right_slice.concat(left_slice);
}

console.log(rightRotate([300,-1,3,0],3))
