function balancedBraces(str) {
  let stack = [];
  let map = { "}": "{", ")": "(", "]": "[" };
  let bValue = "";
  console.log(map["("]);

  str.split("").forEach(x => {
    ["(", "{", "["].includes(x)
      ? stack.push(x)
      : stack.pop() === map[x]
        ? (bValue = true)
        : (bValue = false);
  });
  return bValue;
}

console.log(balancedBraces("{[()]}"));

console.log(balancedBraces("{x[{((((]}"));

console.log(
  balancedBraces("(){}[]"), // => true
  balancedBraces("([{}])"), // => true
  balancedBraces("(}"), // => false
  balancedBraces("[(])"), // => false
  balancedBraces("[({})](]") // => false
);
