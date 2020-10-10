const find_all_duplicates = function(nums) {
  duplicateNumbers = [];

  let i = 0;
  while (i < nums.length) {
    j = nums[i] - 1;
    if (nums[i] != nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
    } else {
      i++
    }
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      duplicateNumbers.push(nums[i])
    }
  }


  return duplicateNumbers;
};

console.log(find_all_duplicates([3, 4, 4, 5, 5]))
