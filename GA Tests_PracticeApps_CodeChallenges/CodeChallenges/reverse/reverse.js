var reverse1 = [];

function reverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
    reverse1.push(arr[i]);
  }
  return reverse1;
}

console.log(reverse([1, 2, 3, 4, 5]));
