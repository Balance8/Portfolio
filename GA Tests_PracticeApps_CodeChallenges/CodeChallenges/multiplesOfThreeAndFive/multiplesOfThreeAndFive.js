function multiplesOfThreeAndFive() {
  let store = [];
  for (let i = 1; i < 1000; i++) {
    i % 3 === 0 ? store.push(i) : i % 5 === 0 ? store.push(i) : false;
  }
  console.log(store);
  // console.log(store.reduce(n => n + n, 0));
  var total = store.reduce((acc, n) => acc + n, 0);
  return total;
}

console.log(multiplesOfThreeAndFive());
