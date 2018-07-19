function breakingRecords(scores) {
  let newArray = [];
  let minMax = { max: 0, min: 0 };

  scores.forEach(e => {
    e > Math.max(...newArray) && newArray.length > 0
      ? minMax.max++
      : e < Math.min(...newArray) && newArray.length > 0
        ? minMax.min++
        : "";
    newArray.push(e);
  });

  return [minMax.max, minMax.min];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
