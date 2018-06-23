function addToEachArrayElement(arr, num) {
  let arrA = [];

  arr.forEach(e => {
    arrA.push(e + num);
  });

  console.log(arrA);
  return arrA;
}

addToEachArrayElement([1, 2, 3], 1); //=> [2,3,4]
addToEachArrayElement([0], 6); //=> [6]
addToEachArrayElement([-4, 8, 6], 0); //=> [-4,8,6]
addToEachArrayElement([3, 1], 100); //=> [103,101]
