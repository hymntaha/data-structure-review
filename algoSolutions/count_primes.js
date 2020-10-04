var countPrimes = function(n) {
  var nums = [];
  let primeCount = 0;

  for (let i = 0; i < n; i++) {
    nums[i] = true;
  }

  for (let i = 2; i * i < n; i++) {
    if (nums[i] === true) {
      for (let j = 2; j * i < n; j++) {
        nums[j*i] = false
      }
    }
  }

  for (let i = 2; i < n; i++) {
    if (nums[i] === true) {
      primeCount++;
    }
  }
  return  primeCount

}

console.log(countPrimes(10))
