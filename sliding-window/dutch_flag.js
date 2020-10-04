const dutch_flag_sort = function(arr) {
  let low = 0;
  let high = arr.length-1;
  let i= 0;

  while (i <= high) {
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]]
      i++; low++
    } else if(arr[i] === 1){
      i++;
    } else {
      [arr[i], arr[high]] = [arr[high],arr[i]]
      high--;
    }
  }
};

let arr = [1, 0, 2, 1, 0];
dutch_flag_sort(arr);
console.log(arr);
