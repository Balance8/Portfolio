function getTotalX(a, b) {
  let obj1 = {};
  let obj2 = {};

  a.forEach(e => {
    for (let i = 1; i <= b[0]; i++) {
      i % e === 0 ? (obj1[i] ? obj1[i]++ : (obj1[i] = 1)) : "";
    }
  });
  b.forEach(e => {
    for (let i = 1; i <= b[0]; i++) {
      e % i === 0 ? (obj2[i] ? obj2[i]++ : (obj2[i] = 1)) : "";
    }
  });

  console.log(Object.keys(obj1).filter(key => obj1[key] > 1));
  console.log(Object.keys(obj2).filter(key => obj2[key] > 1));
  let array1 = Object.keys(obj1).filter(key => obj1[key] > 1);
  let array2 = Object.keys(obj2).filter(key => obj2[key] > 1);
  console.log(array1.filter(value => -1 !== array2.indexOf(value)));
  let finalArr = array1.filter(value => -1 !== array2.indexOf(value));
  return finalArr.length;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
console.log(getTotalX([2], [20, 30, 12]));
