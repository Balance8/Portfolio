function minBy(cb, x, y) {
  return cb(x) > cb(y) ? y : x;
}

function square(n) {
  return n * n;
}

console.log(minBy(square, -3, 2)); //=> 2
