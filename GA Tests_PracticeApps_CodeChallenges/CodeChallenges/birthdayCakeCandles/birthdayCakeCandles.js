let birthdayCakeCandles = ar => {
  const max = Math.max(...ar);
  return ar.filter(x => x === max).length;
};

console.log(birthdayCakeCandles([3, 2, 1, 3]));

//   let arr = [];
//   for (let i = 0; i < ar.length; i++) {
//     arr.push(ar[i]);
//   }
//   let sorted = ar.sort((a, b) => a - b);
//   console.log(sorted);
//   arr = {};

//   for (let i = 0; i < ar.length; i++) {
//     typeof arr[sorted[i]] === "undefined"
//       ? (arr[sorted[i]] = 1)
//       : arr[sorted[i]]++;
//   }
//   return arr;
