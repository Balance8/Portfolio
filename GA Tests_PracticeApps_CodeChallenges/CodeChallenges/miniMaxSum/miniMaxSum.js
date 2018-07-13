let miniMaxSum = arr => {
  let [min, max] = [[], []];
  let sorted = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    min.push(sorted[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    max.push(sorted[i]);
  }

  console.log(min);
  console.log(max);
};

console.log(miniMaxSum([1, 20, 2, 3, 4, 5]));
