const smallest_subarray_with_given_sum = function (s, arr) {
  let windowStart = 0;
  let windowEnd = 0;
  let minLength = Infinity;
  let windowTotal = 0;

  for (windowEnd; windowEnd < arr.length; windowEnd++) {
    windowTotal += arr[windowEnd];

    while (windowTotal >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowTotal -= arr[windowStart];
      windowStart++;
    }
  }
  if (minLength == Infinity) {
    return 0;
  }

  return minLength;
};

console.log(smallest_subarray_with_given_sum(7,[2, 1, 5, 2, 8] ))
