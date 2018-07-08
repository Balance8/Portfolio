function balancedBraces(str) {
  let stack = [];
  let map = { "}": "{", ")": "(", "]": "[" };

  

  for (let index = 0; index < str.length; index++) {
    let curr = str[index];

    if (["(", "{", "["].includes(curr)) {
      stack.push(curr);
    } else {
      let top = stack.pop();
      if (top !== map[curr]) {
        return false;
      }
    }
  }
  return true;
}

console.log(balancedBraces("{xx[x()x]xxx}"));

console.log(balancedBraces("{xx[{((((x]xx}"));

console.log(
  balancedBraces("(){}[]"), // => true
  balancedBraces("([{}])"), // => true
  balancedBraces("(}"), // => false
  balancedBraces("[(])"), // => false
  balancedBraces("[({})](]") // => false
);
