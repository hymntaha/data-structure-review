const pair_with_targetsum = function(arr, target_sum) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    let currentTotal = arr[left] + arr[right];
    if (currentTotal === target_sum) {
      return [left, right];
    }

    if (target_sum > currentTotal) {
      left++;
    } else {
      right--;
    }
  }
  return [-1,-1]

}


console.log(pair_with_targetsum([1, 2, 3, 4, 6], 6))
