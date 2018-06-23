function alternateArrays(arr1, arr2, arr3) {
  let final = [];
  for (let i = 0; i < arr1.length; i++) {
    final.push(arr1[i], arr2[i], arr3[i]);
  }
  console.log(final);
  return final;
}

alternateArrays([0, 3, 6], [1, 4, 7], [2, 5, 8]); //=> [0,1,2,3,4,5,6,7,8]
alternateArrays(["cats", "i"], ["are", "like"], ["cool", "coconuts"]); //=> ["cats", "are", "cool", "i", "like", "coconuts"]
