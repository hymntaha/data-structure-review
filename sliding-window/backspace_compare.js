const backspace_compare = function(strA, strB) {
  let aPointer = strA.length-1
  let bPointer = strB.length-1
  let aCount = 0
  let bCount = 0

  while (aPointer >= 0 || bPointer >= 0) {
    let aItem = strA[aPointer]
    let bItem = strB[bPointer]
    if (aItem === '#') {
      aPointer--
      aCount++
    } else if (bItem === '#') {
      bPointer--
      bCount++
    } else if (aCount > 0) {
      aCount--
      aPointer--
    } else if (bCount > 0) {
      bCount--
      bPointer--
    } else if (aPointer >= 0 && bPointer >= 0 && aItem !== bItem) {
      return false
    } else if (aPointer >= 0 !== bPointer >= 0) {
      return false
    } else {
      aPointer--
      bPointer--
    }
  }
  return true
};

console.log(backspace_compare("xy#z",'xyz#'))
