function findSecondMaximum(arr) {
  var max = Number.NEGATIVE_INFINITY;
  var secondMax = Number.NEGATIVE_INFINITY;

  for (var val of arr) {
    if (val > max) {
      secondMax = max;
      max = val;
    } else if (val > secondMax && val != max) {
      secondMax = val;
    }
  }
  return secondMax;
}

console.log(findSecondMaximum([9,2,3,6]))
