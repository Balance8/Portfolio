function findIndex(arr, cb) {
  var x = [];
  countUp = "";
  for (let index = 0; index < arr.length; index++) {
    if (cb(arr[index])) {
      countUp = index;
      break;
    } else {
      false;
    }
  }
  console.log(countUp, arr.length);
  return countUp === "" ? -1 : countUp;
}

//console.log([5, 12, 8, 130, 44], )

console.log(
  findIndex([5, 12, 8, 8, 8], function(num) {
    //=> 3
    return num > 20;
  })
);
