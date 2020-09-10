const search_triplets = function(arr) {
  console.time('someFunction')
  arr.sort((a, b) => {
    return a - b;
  });

  const result = [];

  for (let indexA = 0; indexA < arr.length - 2; indexA++) {

    let indexB = indexA + 1;
    let indexC = arr.length - 1;

    if (indexA > 0 && arr[indexA] === arr[indexA - 1]) continue;

    while (indexB < indexC ) {

      let sum = arr[indexA] + arr[indexB] + arr[indexC];

      if (sum < 0) {
        indexB++;
      } else if (sum > 0) {
        indexC--;
      } else {
        result.push([arr[indexA], arr[indexB], arr[indexC]]);
        while (arr[indexB] === arr[indexB + 1]) indexB++;
        while (arr[indexC] === arr[indexC - 1]) indexC--
        indexB++;
        indexC--;
      }
    }
  }
  console.timeEnd('someFunction')
  return result;
};

console.log(search_triplets([-5, 2, -1, -2, 3]));

// [-5,2,3], [-2,-1,3]
// 138ms
