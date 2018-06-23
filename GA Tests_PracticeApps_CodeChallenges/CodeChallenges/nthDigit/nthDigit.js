function nthDigit(x, n) {
  let str = x.toString();
  let arr = [];

  for (var i = str.length - 1; i >= 0; i--) {
    arr.push(str.charAt(i));
  }

  console.log(arr);

  return parseInt(arr[n]);
}

console.log(nthDigit(123, 0)); //=> 3
// nthDigit(123, 1) //=> 2
// nthDigit(123, 2) //=> 1
// nthDigit(234642, 4) //=> 3
