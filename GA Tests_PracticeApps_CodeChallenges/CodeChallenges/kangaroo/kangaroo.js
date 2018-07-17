function kangaroo(x1, v1, x2, v2) {
  if (v1 < v2) return "NO";
  if (x1 < x2 && v1 > v2) {
    const xDiff = Math.abs(x1 - x2);
    const vDiff = Math.abs(v1 - v2);
    console.log(xDiff, vDiff);
    if (xDiff % vDiff == 0) {
      return "YES";
    } else {
      return "NO";
    }
  }
  return "NO";
  //   let ff = { k1: 0, k2: 0 };
  //   let yn = "NO";
  //   for (let index = 2; index < 3; index++) {
  //     ff.k2 = (x2 + v2) * index;
  //   }
  //   for (let index = 1; index < 10; index++) {
  //     ff.k1 === ff.k2 ? (yn = "YES") : (ff.k1 = (x1 + v1) * index);
  //   }

  //   return yn;
}

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));
/* k1 starts at 0 and jumps 3 times 
   k2 starts at 4 and jumps 2 times

   0+3 = 3     4+2 = 6
   3*2 = 6     6*2 = 12
   3*3 = 9
   3*4 = 12
*/
