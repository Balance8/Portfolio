function plusMinus(arr) {
  let [neg, pos, zero] = [[], [], []];
  arr.forEach(e => {
    e > 0 ? pos.push(e) : e < 0 ? neg.push(e) : zero.push(e);
  });
  //   console.log(
  //     (pos.length / arr.length).toFixed(6),
  //     (neg.length / arr.length).toFixed(6),
  //     (zero.length / arr.length).toFixed(6)
  //   );
  console.log(
    typeof parseInt(
      [
        (pos.length / arr.length).toFixed(6),
        (neg.length / arr.length).toFixed(6),
        (zero.length / arr.length).toFixed(6)
      ].join("\n")
    )
  );
  return parseInt(
    [
      (pos.length / arr.length).toFixed(6),
      (neg.length / arr.length).toFixed(6),
      (zero.length / arr.length).toFixed(6)
    ].join("\n")
  );
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
