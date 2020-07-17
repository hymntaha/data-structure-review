function findFirstUnique(arr) {
  let start = 0;
  let end = arr.length-1;
  let foundElement = 0;

  for (start; start < end; start++) {
    console.log(arr[end])
    if (arr[end] != arr[start]) {
      foundElement = arr[start]
    } else {
      end--;
    }

  }
  return foundElement;
}
console.log(findFirstUnique([9,2,3,2,6,6]))
