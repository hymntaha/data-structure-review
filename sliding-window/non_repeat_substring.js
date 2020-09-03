const non_repeat_substring = function(str) {
  let windowStart =0;
  let windowEnd = 0;
  let char = {};
  let maxLength =0;

  for (windowEnd; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in char) {
      windowStart = Math.max(windowStart, char[rightChar]+1)
    }
    char[rightChar] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

console.log(non_repeat_substring("abccde"))
