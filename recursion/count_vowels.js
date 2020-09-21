// Iterative method
function isVowel(char) {
  var char = char.toLowerCase();
  var vowels = 'aeiou';

  if (vowels.indexOf(char) != -1) {
    return true;
  } else {
    return false
  }
}

function countVowelsRecursive(string, stringLength) {
  if (stringLength == 1) {
    return Number(isVowel(string[0]));
  }
  console.log(countVowelsRecursive(string, stringLength-1) )
  return countVowelsRecursive(string, stringLength-1) + isVowel(string[stringLength-1])
}

function countVowelsIter(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      count++;
    }
  }
  return count;
}

var targetVariable = 'educative';
// console.log(countVowelsIter(targetVariable));
console.log(countVowelsRecursive(targetVariable, targetVariable.length));
