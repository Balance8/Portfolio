function thirdGreatest(arr) {
  console.log(arr.sort());
  arrS = arr.sort();
  console.log(arrS[arr.length - 3]);
  arrG = arrS[arr.length - 3]
  return arrG
}

console.log(thirdGreatest([1, 2, 3])) //=> 1 
console.log(thirdGreatest([7, 2, 4, 1, -5, 3])) //=> 3
