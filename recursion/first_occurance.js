// ITERATIVE SOLUTION
// function firstIndex(arr, testVariable, currentIndex) {
//   while (currentIndex < arr.length) {
//     if (arr[currentIndex] == testVariable) {
//       return currentIndex;
//     }
//     currentIndex++;
//   }
// }

// RECURSIVE METHOD
function firstIndex(arr, testVariable, currentIndex) {
  // Base case 1
  if (arr.length == currentIndex) {
    return -1;
  }

  // Base case 2
  if (arr[currentIndex] == testVariable) {
    return currentIndex
  }

  //Recursive case
  return firstIndex(arr, testVariable, currentIndex + 1);
}

console.log(firstIndex([9, 8, 1, 8, 1, 7],1,0))
