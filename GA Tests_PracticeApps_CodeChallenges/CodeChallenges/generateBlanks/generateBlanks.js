function generateBlanks(str) {
  let x = [];
  for (let i = 0; i < str.length; i++) {
    x.push(str[i]);
  }
  let e = x.map(e => (e === " " ? " " : "_")).join("");
  console.log(e.toString());
  return e.toString();
}

generateBlanks("catdog"); //=> "______" (6 "_"'s)
generateBlanks("a b c"); //=> "_ _ _"
