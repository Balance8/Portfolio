function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let result = { applesR: 0, orangesR: 0 };
  let house = t - s;
  let houseToAppleStart = s - a;
  let houseToAppleEnd = t - a;
  console.log(house); // 4
  console.log(houseToAppleStart); //2
  console.log(houseToAppleEnd); //6
  apples.forEach(apple => {
    console.log(a + apple + " a + apple");
    a + apple >= houseToAppleStart && a + apple <= houseToAppleEnd && apple >= 0
      ? result.applesR++
      : "";
  });
  return result;
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
