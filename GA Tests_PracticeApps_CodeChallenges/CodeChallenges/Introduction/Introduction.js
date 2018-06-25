function add(a, b) {
  return a + b;
}
var x = add(4, 3);
console.log(x);

var cat = "cute";
console.log(cat);

function arrayLength(array) {
  if (array instanceof Array) {
    return array.length;
  } else {
    return 0;
  }
}
var myArray = [1, 2, 3];
console.log(arrayLength(myArray));
var myString = "test";
console.log(arrayLength(myString));

function keys(obj) {
  let keys = [];

  for (let key in obj) {
    keys.push(key);
  }

  return keys;
}
var myKey = { a: "cat", b: "dog" };
console.log(keys(myKey));
