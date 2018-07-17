function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let result = { applesR: 0, orangesR: 0 };
  apples.forEach(apple => {
    a + apple >= s && a + apple <= t && apple >= 0 ? result.applesR++ : "";
  });
  oranges.forEach(orange => {
    b + orange <= t && b + orange >= s && orange <= 0 ? result.orangesR++ : "";
  });
  console.log(result.applesR);
  console.log(result.orangesR);
  return result;
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
