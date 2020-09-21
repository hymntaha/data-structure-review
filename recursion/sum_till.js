function sumTill(targetNumber) {
  // Base case
  if (targetNumber == 1) {
    return targetNumber;
  }

  // Recursive case
  else {
    return targetNumber + sumTill(targetNumber - 1);
  }
}

console.log(sumTill(5))
