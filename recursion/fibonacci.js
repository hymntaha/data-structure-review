function fibonacci(testVariable) {

  if (testVariable <= 1) {
    return testVariable;
  }

  return fibonacci(testVariable - 1) + fibonacci(testVariable - 2)
}

console.log(fibonacci(7))

//
