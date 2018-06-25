function fizzBuzz(n) {
  let final = [];
  for (let i = 1; i <= n; i++) {
    final.push(i);
  }

  final.forEach(e => {
    e % 5 === 0 && e % 3 === 0
      ? (final[e - 1] = "FizzBuzz")
      : e % 5 === 0
        ? (final[e - 1] = "Buzz")
        : e % 3 === 0
          ? (final[e - 1] = "Fizz")
          : e;
  });
  return final;
}

console.log(fizzBuzz(15)); //=> [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]
fizzBuzz(5); //=> [1,2,"Fizz",4,"Buzz"]
