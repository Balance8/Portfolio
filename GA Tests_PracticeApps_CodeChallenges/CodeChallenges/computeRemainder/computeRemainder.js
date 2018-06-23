var computeRemainder = function(x, y) {
  if (y === 0) {
    return "Thou shalt not divide by zero!";
  }

  total = x;
  for (i = 0; i < arguments.length; i++) {
    total %= y;
  }
  return total;
};

console.log(computeRemainder(12, 6));
