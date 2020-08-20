function find_averages_of_subarrays(K, arr) {
  let windowStart = 0,
    windowEnd = 0,
    maxSum=0,
    windowSum=0;

  for (windowEnd; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= K - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return maxSum

}

console.log(find_averages_of_subarrays(3,[2, 1, 5, 1, 3, 2]))
