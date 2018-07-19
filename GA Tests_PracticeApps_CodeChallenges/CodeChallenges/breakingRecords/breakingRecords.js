function breakingRecords(scores) {
  let newArray = [];
  let minMax = { max: 0, min: 0 };

  scores.forEach(e => {
    // console.log(Math.max(...newArray), Math.min(...newArray));
    // console.log(newArray);
    e > Math.max(...newArray) && newArray.length > 0
      ? minMax.max++
      : e < Math.min(...newArray) && newArray.length > 0
        ? minMax.min++
        : "";
    console.log(minMax);
    newArray.push(e);
  });

  console.log(newArray);
  console.log(minMax);
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
