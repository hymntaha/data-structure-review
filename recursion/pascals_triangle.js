function printPascal(testVariable) {
  // Base case
  if (testVariable == 0) {
    return [1];
  } else {
    var line = [1];
    // Recursive case
    previousLine = printPascal(testVariable - 1);
    console.log(previousLine)
    for (let i = 0; i < previousLine.length - 1; i++) {
      line.push(previousLine[i] + previousLine[i + 1]);
    }
    line.push(1);
  }
  return line;
}

console.log(printPascal(5))
