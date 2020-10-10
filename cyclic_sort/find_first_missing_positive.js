const find_first_missing_positive = function(nums) {
  let i = 0;
  n = nums.length;
  while (i < n) {
    j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  for (i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return nums.length + 1;
};

console.log(find_first_missing_positive([-3, 1, 5, 4, 2]))
