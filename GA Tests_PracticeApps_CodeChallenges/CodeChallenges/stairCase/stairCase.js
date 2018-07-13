// function stairCase(n) {
//   let arr = Array(n).fill("#");

//   console.log(arr.join("\n"));
// }

let stairCase = n => {
  let line = Array(n+1).fill(" ");
  for (let index = n-1; index >= 0; index--) {
      line[index] = "#";
      console.log(line)
    console.log(line.join(""));
  }
};

stairCase(6);
