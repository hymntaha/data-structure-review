function printPascal(testVariable) {
  if (testVariable == 0) {
    return [1];
  } else {
    var line = [1];
    previousLine = printPascal(testVariable - 1);
    for (let i = 0; i < previousLine.length-1; i++) {
      line.push(previousLine[i]+previousLine[i+1])
    }
    line.push(1);
  }
  return line
}

console.log(printPascal(5))
