function concat(arr1, arr2) {
  var arr3 = arr1;
  for (let i = 0; i < arr2.length; i++) {
    arr3.push(arr2[i]);
  }

  console.log(arr3);
  return arr3;
}

console.log(concat([1, 2, 3], [4, 5, 6])); //=> [1,2,3,4,5,6]
console.log(concat(["cat", "coconut"], ["yee", "haw"])); //=> ["cat", "coconut", "yee", "haw"]
