const triplet_with_smaller_sum = function(arr, target) {
  arr.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[right] + arr[left];
      if (sum < target) {
        count += right - left;
        left += 1;
      } else {
        right -= 1
      }
    }
  }
  return count;
};

console.log(triplet_with_smaller_sum( [-1, 4, 2, 1, 3], 5))
// console.log(triplet_with_smaller_sum( [-1, 0, 2, 3], 3))
