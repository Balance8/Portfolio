var range = function(x, y) {
  var arrays = [];

  if (x > y) {
    return "First parameter must be smaller than second.";
  }

  for (i = x; i < y; i++) {
    arrays.push(i);
  }
  return arrays;
};

console.log(range(1, 4));
