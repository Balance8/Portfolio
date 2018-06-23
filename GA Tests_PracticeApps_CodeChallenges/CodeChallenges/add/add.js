function add(nums) {
  var array1 = [];
  var total = 0;

  for (i = 0; i < arguments.length; i++) {
    array1.push(arguments[i]);
  }
  console.log(array1);
  for (i = 0; i < array1.length; i++) {
    total += array1[i];
  }
  return total;
}

console.log(add(3, 4.3, 5, 6));
