function balancedBraces(str) {
  let stack = [];
  let map = { "}": "{", ")": "(", "]": "[" };

  str.split("").forEach(x => {
    ["(", "[", "{"].includes(x)
      ? stack.push(x)
      : stack[stack.length - 1] === map[x]
        ? stack.pop()
        : map[x] && stack.push(x);
  });
  console.log(stack);

  return stack.length === 0;
}

console.log(balancedBraces("{(([])[])[]]}"));

console.log(balancedBraces("{x[{((((]}"));

console.log(
  balancedBraces("(){}[]"), // => true
  balancedBraces("([{}])"), // => true
  balancedBraces("(}"), // => false
  balancedBraces("[(])"), // => false
  balancedBraces("[({})](]") // => false
);
