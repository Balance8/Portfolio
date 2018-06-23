//let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," "];

/*var x = [];
function caesarCipher(plainText){
  for (i=0; i < plainText.length; i++){
    
    x.push(plainText[i]);
    
  }
  return x;
}
*/

//console.log(caesarCipher('hello'));
function caesarCipher(plainText, shift) {
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " "
  ];
  let x = [];
  for (let i = 0; i < plainText.length; i++) {
    if (alphabet.indexOf(plainText[i]) + shift > 26) {
      let num = shift - (26 - alphabet.indexOf(plainText[i]));
      x += alphabet[num - 1];
    } else {
      x += alphabet[alphabet.indexOf(plainText[i]) + shift];
    }
  }
  return x;
}

/*var x = {};
function caesarCipher(plainText, shift) {
  for (i = 0; i < plainText.length; i ++){
    if (x[plainText[i]] === undefined) {
      x[plainText[i]] = 0;
    }
    x[plainText[i]]++;
  }
  return x;
}
*/

//console.log(caesarCipher('HELLO', 7)); //=> 'OLSSV'
console.log(caesarCipher("MEET ME TONIGHT AT THE PARK", 2)); //=>'OGGVBOGBVQPKIJVBCVBVJGBRCTM'
//console.log(caesarCipher('ABC', 9)); //=> 'JKL'
//console.log(caesarCipher('Z ', 1)); //=> ' A'
