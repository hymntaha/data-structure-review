function findFirstUnique(arr) {
  let arrToHash = {};

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in arrToHash)) {
      arrToHash[arr[i]] = 1;
    } else {
      arrToHash[arr[i]] += 1;
    }
  }
  let firstUniqueElem = 0;

  for (let [key, value] of Object.entries(arrToHash)) {
    if (value == 1) {
      firstUniqueElem = key
    }
  }
  return firstUniqueElem
}
console.log(findFirstUnique([9,2,3,2,6,6]))
