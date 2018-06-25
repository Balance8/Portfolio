function includes(arr, elem) {
  var store = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      store = arr[i];
      break;
    } else {
      false;
    }
  }
  return !!store;
}

console.log(includes([1, 2, 3], 3));
