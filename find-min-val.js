function findMinimum(arr) {
  arr.sort((a,b)=> a - b);
  return arr[0]
}

console.log(findMinimum([4,2,1,5,0]))


// TIME CONPLEXITY  - O(nlogn)

// ALTERNATIVE SOLUTION
function findMinimum2(arr) {
  var currMin = arr[0];
  for (let val of arr) {
    if (val < currMin) {
      currMin = val
    }
  }
  return currMin;
}

console.log(findMinimum2([4,2,1,5,0]))


// ALTERNATIVE SOLUTION IS O(N)
