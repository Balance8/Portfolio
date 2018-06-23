function tail(arr) {
  return arr.slice(1, arr.length);
}

console.log(tail([1, 2, 3])); //=> [2,3]
console.log(tail(["cat", 2, { a: "ok" }])); //=> [2, {a: "ok"}]
