const cyclic_sort = function(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i +=1;
    }
  }
  return nums
}


console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`)
