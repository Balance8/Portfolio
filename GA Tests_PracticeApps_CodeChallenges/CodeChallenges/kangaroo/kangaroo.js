function kangaroo(x1, v1, x2, v2) {
  let ff = { k1: 0, k2: 0 };
  for (let index = 2; index < 3; index++) {
    ff.k2 = (x2 + v2) * index;
  }
  for (let index = 2; index < 3; index++) {
    ff.k2 = (x2 + v2) * index;
  }
}

console.log(kangaroo(0, 3, 4, 2));
/* k1 starts at 0 and jumps 3 times 
   k2 starts at 4 and jumps 2 times

   0+3 = 3     4+2 = 6
   3*2 = 6     6*2 = 12
   3*3 = 9
   3*4 = 12
*/
