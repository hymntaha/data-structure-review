function findMinimum(arr) {
  arr.sort((a,b)=> a - b);
  return arr[0]
}

console.log(findMinimum([4,2,1,5,0]))


// TIME CONPLEXITY  - O(nlogn)

// ALTERNATIVE SOLUTION
function findMinimum2(arr) {
  let currMin = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < currMin) {
      currMin = arr[i]
    }
  }
  return currMin;
}

console.log(findMinimum2([4,2,1,5,0]))


// ALTERNATIVE SOLUTION IS O(N)
