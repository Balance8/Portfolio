function kangaroo(x1, v1, x2, v2) {
  let finalJumps = { k1: 0, k2: 0 };
  for (let i = x1; finalJumps.k1 === finalJumps.k2; i++) {
    finalJumps.k1 += v1;
  }
  for (let i = x2; finalJumps.k1 === finalJumps.k2; i++) {
    finalJumps.k2 += v2;
  }
  return finalJumps;
}

console.log(kangaroo(0, 3, 4, 2));
/* k1 starts at 0 and jumps 3 times 
   k2 starts at 4 and jumps 2 times

*/
