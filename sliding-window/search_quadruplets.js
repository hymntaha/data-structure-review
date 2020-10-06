const search_quadruplets = function(arr, target) {
  let quadruplets = [];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 3; i++) {
    for (let j = i + 1; j < arr.length - 2; j++) {
      let low = j + 1;
      let high = arr.length-1;

      while (low < high) {
        const sum = arr[i] + arr[j] + arr[low] + arr[high];
        if (sum === target) {
          quadruplets.push([arr[i], arr[j], arr[low], arr[high]]);
          while (arr[low] === arr[low+1]) low++;
          while(arr[high] === arr[high-1]) high--;
          low++;
          high--;
        } else if (sum < target) {
          low++
        } else {
          high--
        }

      }
      while(arr[j] === arr[j+1]) j++
    }
    while(arr[i] === arr[i+1]) i++;
  }

  return quadruplets;
};

console.log(search_quadruplets([2, 0, -1, 1, -2, 2], 2))
