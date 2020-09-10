const make_squares = function(arr) {
  squares = []

  for (let i = 0; i < arr.length; i++) {
    squares[i] = arr[i] * arr[i];
  }

  squares.sort((a,b) => a-b);

  return squares;
};

console.log(make_squares([-3, -1, 0, 1, 2]))

// 0 1 1 4 9
