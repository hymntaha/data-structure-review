function shortest_window_sort(arr) {
  let n = arr.length;

  let start = -1;
  let end = -2;


  let min = arr[n - 1];
  let max = arr[0];

  for (let i = 1; i < n; i++) {
    let j = n - i - 1;
    console.log(j)
    max = Math.max(max, arr[i]);
    if(arr[i] < max) end = i;

    min = Math.min(min, arr[j]);
    if(arr[j]>min) start = j;
  }


  return end - start + 1;
}

console.log(shortest_window_sort([2,6,4,8,10,9,15]))
