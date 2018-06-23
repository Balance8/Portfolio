function some(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return true;
    }
  }
  return false;
}

var array = [1, 2, 3, 4, 5];
var noEvens = [3, 5, 7];

var even = function(element) {
  // checks whether an element is even
  return element % 2 == 0;
};

console.log(some(array, even)); //=> true
console.log(some(noEvens, even)); //=> false
