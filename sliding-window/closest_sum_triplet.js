const triplet_sum_close_to_target = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closest = null;

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let targetDiff = Math.abs(target-sum)
      let currDiff = Math.abs(target - closest);

      if (targetDiff < currDiff || closest === null) {
        closest = sum;
      }

      if (sum === target) {
        return sum;
      } else if( sum<target){
        left++
      }else {
        right--;
      }

      while(nums[i]=== nums[i+1]) i++;

    }
  }

  return closest;
};

console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1))
