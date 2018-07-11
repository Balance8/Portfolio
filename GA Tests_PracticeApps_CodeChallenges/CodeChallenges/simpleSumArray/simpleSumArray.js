function simpleArraySum(ar) {
  let sum = 0;
  ar.forEach(e => {
    sum += e;
  });
  return sum;
}

console.log(simpleArraySum([5, 4, 3, 2, 1]));
