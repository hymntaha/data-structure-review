function find_missing_numbers(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
    } else {
      i +=1;
    }
  }

    let missingValues = [];

    for (i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        missingValues.push(i+1)
      }
    }

    return missingValues
}

console.log(find_missing_numbers([2, 4, 1, 2]))
