function firstTwoLetters(str) {
  let arr = [];
  str.forEach(x => arr.push(x.split("", 2).join("")));
  return arr;
}

console.log(firstTwoLetters(["hola", "high", "ham"]));
