function solve(a, b) {
  let points = [0, 0];
  a.forEach((e, i) => {
    e > b[i] ? (points[0] += 1) : e === b[i] ? "" : (points[1] += 1);
  });
  return points;
}

console.log(solve([5, 6, 7], [3, 6, 10]));
