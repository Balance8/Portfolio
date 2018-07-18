function getTotalX(a, b) {
  const aMax = Math.max(...a);
  const bMin = Math.min(...b);

  const results = range(aMax, bMin).filter(
    num => a.every(i => num % i === 0) && b.every(j => j % num === 0)
  );
  console.log(results.length);
  return results.length;
}
const range = (start, end) => {
  const ret = [];
  for (let i = start; i <= end; i++) {
    ret.push(i);
  }
  console.log(ret);
  return ret;
};
// let obj1 = {};
// let obj2 = {};
// let bSort = b.sort((x, y) => x - y);
// console.log(bSort, 2 % 3);

// b.forEach(e => {
//   for (let i = 0; i <= bSort[0]; i++) {
//     e % i === 0 ? (obj2[i] ? obj2[i]++ : (obj2[i] = 1)) : "";
//   }
// });

// console.log(Object.keys(obj1).filter(key => obj1[key] > 1));
// console.log(Object.keys(obj2).filter(key => obj2[key] > 1));
// let array1 = Object.keys(obj1).filter(key => obj1[key] > 1);
// let array2 = Object.keys(obj2).filter(key => obj2[key] > 1);
// console.log(array1.filter(value => -1 !== array2.indexOf(value)));
// let finalArr = array1.filter(value => -1 !== array2.indexOf(value));
// return finalArr.length;
// const processData = (a, b) => {
//   console.log(Math.max(...a));
//   console.log(Math.min(...b));
//   // const lines = input.split("\n");
//   // const a = lines[1].split(" ").map(i => parseInt(i));
//   // const b = lines[2].split(" ").map(i => parseInt(i));
//   const aMax = Math.max(...a);
//   const bMin = Math.min(...b);
//   const result = range(aMax, bMin).filter(
//     num => a.every(i => num % i === 0) && b.every(j => j % num === 0)
//   );
//   console.log(result.length);
// };

console.log(getTotalX([2, 4], [16, 32, 96]));
console.log(getTotalX([2], [20, 30, 12]));
// console.log(processData([2, 4], [16, 32, 96]));
// console.log(processData([2], [20, 30, 12]));
