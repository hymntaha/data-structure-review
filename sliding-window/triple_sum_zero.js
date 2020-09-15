const search_triplets = function(arr) {

  arr.sort((a, b) => a - b);

  let result = [];

  for (let indexA = 0; indexA < arr.length - 2; indexA++) {
    let indexB = indexA + 1;
    let indexC = arr.length -1;

    while (indexB < indexC) {
      if (indexA > 0 && arr[indexA] === arr[indexA - 1]) continue;
      let sum = arr[indexA] + arr[indexB] + arr[indexC];
      if (sum < 0) {
        indexB++;
      } else if (sum > 0) {
        indexC--;
      } else {
        result.push([arr[indexA], arr[indexB], arr[indexC]]);
        while(arr[indexC] === arr[indexC-1]) indexC--;
        while(arr[indexB] === arr[indexB+1]) indexB++;

        indexC--;
        indexB++;
      }
    }
  }

  return result;
};

console.log(search_triplets([-5, 2, -1, -2, 3]));

//
// [-5,2,3], [-2,-1,3]
// 138ms
