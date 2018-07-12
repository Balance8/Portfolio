function plusMinus(arr) {
  let [neg, pos, zero] = [[], [], []];
  arr.forEach(e => {
    e > 0 ? pos.push(e) : e < 0 ? neg.push(e) : zero.push(e);
  });
  let total = [
    (pos.length / arr.length).toFixed(6),
    (neg.length / arr.length).toFixed(6),
    (zero.length / arr.length).toFixed(6)
  ];
  console.log(total[0]);
  console.log(total[1]);
  console.log(total[2]);
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));

/*

  console.log(
    parseFloat(
      [
        (pos.length / arr.length).toFixed(6),
        (neg.length / arr.length).toFixed(6),
        (zero.length / arr.length).toFixed(6)
      ].join("\n")
    ),
    (pos.length / arr.length).toFixed(6).toString()
  );

    console.log(typeof total[0]);
*/
