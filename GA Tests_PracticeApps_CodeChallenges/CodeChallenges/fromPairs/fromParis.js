function fromPairs(arr) {
  let arrNew = [];
  console.log(arr[0][0]);
  for (i = 0; i < arr.length; i++) {
    //if ()
      arrNew.push(arr[i][arr.length - arr.length]);
    arrNew.push(arr[i][arr.length - (arr.length - 1)]);
  }
  // console.log(arr.length);
  // console.log(arr[arr.length]);
  // for (let key in arr){
  // console.log(key);
  // console.log(arr[0]);
  console.log(arrNew);
  return arrNew;
}



console.log(fromPairs([["a", 1], ["b", 2], ["c", 3]])); //=> { a: 1, b: 2, c: 3 }
console.log(fromPairs([["name", "Jon"], ["age", 24], ["name", "Paul"]])); //=> { name: "Paul", age: 24 }