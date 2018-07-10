function balancedBraces(str) {
  let stack = [];
  let map = { "}": "{", ")": "(", "]": "[" };
  let bValue;

  // console.log(Object.keys(map));
  // console.log(Object.values(map));
  // console.log(JSON.parse(JSON.stringify(map["}"])));

  str.split("").forEach(x => {
    // console.log(x);

    ["(", "{", "["].includes(x)
      ? stack.push(x)
      : [")", "}", "]"].includes(x)
        ? stack.pop()
        : ""
  });

  console.log(stack)

  return stack.length === 0;
}

console.log(balancedBraces("{[(xx)]}"));

console.log(balancedBraces("{x[{((((]}"));

console.log(
  balancedBraces("(){}[]"), // => true
  balancedBraces("([{}])"), // => true
  balancedBraces("(}"), // => false
  balancedBraces("[(])"), // => false
  balancedBraces("[({})](]") // => false
);
