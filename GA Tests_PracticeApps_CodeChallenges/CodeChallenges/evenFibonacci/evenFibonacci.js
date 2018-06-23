let a = 1;
let b = 2;
let sum = 0;

function evenFibonacci() {
  while (a < 4000000) {
    if (a % 2 === 0) {
      sum += a;
    }
    var c = a + b;
    a = b;
    b = c;
  }
  return sum;
}

evenFibonacci();
