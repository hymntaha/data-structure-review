const fruits_into_baskets = function(fruits) {
  let windowStart = 0; let maxLength = 0;
  let fruitsTrees = {};

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightChar = fruits[windowEnd];
    if (!(rightChar in fruitsTrees)) {
      fruitsTrees[rightChar] = 0;
    }
    fruitsTrees[rightChar] += 1;

    while (Object.keys(fruitsTrees).length > 2) {
      const leftChar = fruits[windowStart];
      fruitsTrees[leftChar] -=1;
      if (fruitsTrees[leftChar] === 0) {
        delete fruitsTrees[leftChar];
      }
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart +1)
  }
  return maxLength;
};

console.log(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']))
