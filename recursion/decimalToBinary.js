function decimalToBinary(testVariable) {
  // Base case
  if (testVariable <= 1) {
    return String(testVariable)
  }

  // Recursive case
  else {
    console.log(decimalToBinary(testVariable % 2))
    return decimalToBinary(Math.floor(testVariable / 2)) + decimalToBinary(testVariable % 2)
  }
}

decimalToBinary(11)
