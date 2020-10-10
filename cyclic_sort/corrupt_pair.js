const find_corrupt_numbers = function(nums) {
  let i = 0;

  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
    } else {
      i++
    }
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i] !==i + 1) {
      return [nums[i], i+1]
    }

  }

  return [-1, -1];
};

console.log(find_corrupt_numbers([3, 1, 2, 5, 2]))
