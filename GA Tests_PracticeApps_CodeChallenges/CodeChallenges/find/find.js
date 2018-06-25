function find(arr, cb) {
  var store = undefined;
  for (let index = 0; index < arr.length; index++) {
    if (cb(arr[index])) {
      store = arr[index];
      break;
    } else {
      false;
    }
  }
  return store;
}

console.log(
  find([5, 12, 8, 130, 44], function(element) {
    //=> 12
    return element > 10000;
  })
);

//console.log(find([0, 1, 0, 1], (elem) => elem)); //=> 1
