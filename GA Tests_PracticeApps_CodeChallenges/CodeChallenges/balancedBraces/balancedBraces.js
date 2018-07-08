function balancedBraces(str) {
  stack = [];
  str.split("").forEach(x => {
    x === "{" || x === "[" || x === "(" ? stack.push(x) : x === "}" || x === "]" || x === ")" ? stack.pop(x) : "";

  });
  console.log(stack);
  return stack.length === 0;
}

console.log(balancedBraces("{xx[x()x]xx}"));

console.log(balancedBraces("{xx[x)x]xx}"));
