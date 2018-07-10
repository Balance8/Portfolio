function balancedBraces(str) {
  let stack = [];
  let map = { "}": "{", ")": "(", "]": "[" };

  // console.log(Object.keys(map));
  // console.log(Object.values(map));
  // console.log(JSON.parse(JSON.stringify(map["}"])));
  str.split("").forEach(x => {
    ["(", "{", "["].includes(x)
      ? stack.push(x)
      : stack[stack.length - 1] === map[x]
        ? stack.pop()
        : "";
  });
  return stack.length === 0;
}

console.log(balancedBraces("{[(x)x]asd}"));

console.log(balancedBraces("{x[{((((]}"));

console.log(
  balancedBraces("(){}[]"), // => true
  balancedBraces("([{}])"), // => true
  balancedBraces("(}"), // => false
  balancedBraces("[(])"), // => false
  balancedBraces("[({})](]") // => false
);
