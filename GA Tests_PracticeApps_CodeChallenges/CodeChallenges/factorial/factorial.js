function factorial(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
    //console.log(sum)
  }

  return sum;
}

console.log(factorial(5)); //=> 120
console.log(factorial(3)); //=> 6
console.log(factorial(1)); //=> 1
console.log(factorial(7)); //=> 5040
