function nthFibonacci(n) {
  var a = 0,
    b = 1,
    f = 1;
  for (i = 2; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
  }
  if (n <= 0) f = 0;
  return f;
}

console.log(nthFibonacci(0)); //=> 0
console.log(nthFibonacci(1)); //=> 1
console.log(nthFibonacci(2)); //=> 1
console.log(nthFibonacci(3)); //=> 2
console.log(nthFibonacci(4)); //=> 3
console.log(nthFibonacci(26)); //=> 121393
