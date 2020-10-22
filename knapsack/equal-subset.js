let canPartition = A => {
  let total = A.reduce((a, b) => a + b);
  if (total % 2)
    return false;
  let T = Math.floor(total / 2);
  let dp = Array(T + 1).fill(0);
  dp[0] = 1;
  for (let x of A)
    for (let sum = T; sum >= x; --sum)
      if (dp[sum - x])
        dp[sum] = 1;
  return dp[T];
};
console.log(canPartition([1, 1, 3, 4, 7]));

// let canPartition = function(num) {
//   const n = num.length;
//   // find the total sum
//   let sum = 0;
//   for (let i = 0; i < n; i++) sum += num[i];
//
//   // if 'sum' is a an odd number, we can't have two subsets with same total
//   if (sum % 2 != 0) return false;
//
//   // we are trying to find a subset of given numbers that has a total sum of ‘sum/2’.
//   sum /= 2;
//
//   const dp = Array(n)
//     .fill(false)
//     .map(() => Array(sum + 1).fill(false));
//
//   // populate the sum=0 columns, as we can always for '0' sum with an empty set
//   for (let i = 0; i < n; i++) dp[i][0] = true;
//
//   // with only one number, we can form a subset only when the required sum is equal to its value
//   for (let s = 1; s <= sum; s++) {
//     dp[0][s] = num[0] == s;
//   }
//
//   // process all subsets for all sums
//   for (let i = 1; i < n; i++) {
//     for (let s = 1; s <= sum; s++) {
//       // if we can get the sum 's' without the number at index 'i'
//       if (dp[i - 1][s]) {
//         dp[i][s] = dp[i - 1][s];
//       } else if (s >= num[i]) {
//         // else if we can find a subset to get the remaining sum
//         dp[i][s] = dp[i - 1][s - num[i]];
//       }
//     }
//   }
//
//   // the bottom-right corner will have our answer.
//   return dp[n - 1][sum];
// };
