const smallest_subarray_with_given_sum = function (s, arr) {
  let windowStart = 0, windowEnd = 0, minLength = Infinity, currTotal = 0;

  for (windowEnd; windowEnd < arr.length; windowEnd++) {
    currTotal += arr[windowEnd];

    while (currTotal >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1)
      currTotal -= arr[windowStart];
      windowStart++;

    }
  }

  if (minLength == Infinity) {
    return 0;
  }

  return minLength;
};

console.log(smallest_subarray_with_given_sum(7,[2, 1, 5, 2, 8] ))
