const make_squares = function(arr) {
  // BRUTE FORCE
  // squares = []
  //
  // for (let i = 0; i < arr.length; i++) {
  //   squares[i] = arr[i] * arr[i];
  // }
  //
  // squares.sort((a,b) => a-b);
  //
  // return squares;

  let n = arr.length;
  let squares = Array(n).fill(0);
  let left = 0;
  let right = n -1;
  let highestIdx = n -1;
  while (left <= right) {
    console.log(left);
    console.log(right);
    let leftSquared = arr[left] * arr[left],
      rightSquared = arr[right] * arr[right];

    if (leftSquared > rightSquared) {
      squares[highestIdx] = leftSquared;
      left++;
    } else {
      squares[highestIdx] = rightSquared
      right--;
    }
    highestIdx -= 1;
  }
  return squares
};

console.log(make_squares([-3, -1, 0, 1, 2]))

// 0 1 1 4 9
