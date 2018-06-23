function reduce(arr, cb, intialValue) {
  let x;
  intialValue ? x = intialValue : x = 0;
  console.log(x)
  console.log(intialValue)
  return arr.reduce(cb, x)
}


console.log(reduce([1, 2, 3], function (accum, elem) {
  return accum + elem;
})) //=> 6

reduce([1, 11], function (accum, elem) {
  return accum + elem;
}, 5) //=> 17