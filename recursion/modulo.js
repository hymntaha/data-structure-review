function mod(dividend, divisor) {
  // Check division by 0
  if (divisor == 0) {
    console.log("Divisor cannot be");
    return 0;
  }
  console.log(dividend);
  // Base case
  if (dividend < divisor) {
    return dividend;
  }

  // Recursive case
  else {
    return mod(dividend - divisor, divisor)
  }
}

console.log(mod(10, 4))
