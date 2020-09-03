const smallest_subarray_with_given_sum = function (s, arr) {
  let windowStart = 0;
  let windowEnd = 0;
  let minLength = Infinity;
  let currTotal = 0;

  for (windowEnd; windowEnd < arr.length; windowEnd++){
    currTotal += arr[windowEnd];

    while (currTotal >= s) {
      currTotal -= arr[windowStart];
      minLength = (minLength, windowEnd - windowStart + 1);
      windowStart +=1;
    }
  }

  return minLength;

};

console.log(smallest_subarray_with_given_sum(7,[2, 1, 5, 2, 8] ))
