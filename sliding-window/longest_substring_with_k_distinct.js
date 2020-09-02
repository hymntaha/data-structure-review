function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0;
  let windowEnd = 0;
  let maxLength = 0;
  let chars = {};

  for (windowEnd; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in chars)) {
      chars[rightChar] = 0
    }

    chars[rightChar] += 1;

    while (Object.keys(chars).length > k) {
      const leftChar = str[windowStart];
      chars[leftChar] -=1;
      if (chars[leftChar] === 0) {
        delete chars[leftChar];
      }
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd-windowStart +1)

  }

  return maxLength;
}


console.log(longest_substring_with_k_distinct('araaco',2))
