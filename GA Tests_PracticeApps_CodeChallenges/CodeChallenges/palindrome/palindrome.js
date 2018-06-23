function palindrome(str) {
  let element1 = [];
  let element2 = [];
  let t = "";
  for (let i = 0; i < str.length; i++) {
    element1.push(str[i].toLowerCase());
  }
  for (let i = str.length - 1; i >= 0; i--) {
    element2.push(str[i].toLowerCase());
  }
  for (let i = 0; i < str.length; i++) {
    if (element1[i] === element2[i]) {
      t = true;
    } else {
      t = false;
      break;
    }
  }
  return t;
}

console.log(palindrome("RaceCar"));
// palindrome("abba"),
// palindrome("a +B !ba"),
// palindrome("fregin wadda"),
// palindrome("nan!i"));
