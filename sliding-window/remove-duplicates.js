function remove_duplicates(arr) {
  let nextNonDuplicate = 1;
  let i = 1;

  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !==arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate++;
    }
    i++;
  }

  return nextNonDuplicate
}


console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
