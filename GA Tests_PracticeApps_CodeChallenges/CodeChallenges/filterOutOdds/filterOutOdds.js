function filterOutOdds(arr) {
  return arr.filter(n => !(n % 2));
}

console.log(filterOutOdds([1, 2, 3, 4, 4, 5])); //=> [2,4,4]
console.log(filterOutOdds([1, 3, 5])); //=> []
console.log(filterOutOdds([6, 8, 10, 11])); //=> [6,8,10]
