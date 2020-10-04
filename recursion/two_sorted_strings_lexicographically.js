function merge(string1, string2) {
  if (string1.length == 0) {
    if (string2.length == 0) {
      return ''
    }
    return string2;
  }

  else if (string2.length == 0) {
    return string1;
  }

  else if (string1[0] > string2[0]) {
    return string2[0] + merge(string1, string2.substr(1))
  }

  else {
    return string1[0] + merge(string1.substr(1), string2 )
  }
}

// Driver Code
var string1 = "acu";
var string2 = "bst";
console.log(merge(string1, string2));
