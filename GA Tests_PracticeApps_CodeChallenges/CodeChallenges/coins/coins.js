function coins(cents) {
  let coin = 0;

  while (cents > 0) {
    if (cents >= 25) {
      coin++;
      cents = cents - 25;
    } else if (cents >= 10) {
      coin++;
      cents = cents - 10;
    } else if (cents >= 5) {
      coin++;
      cents = cents - 5;
    } else if (cents >= 1) {
      coin++;
      cents = cents - 1;
    }
  }
  // console.log(coin)
  return coin;
}

// let sum = 0

// function coins(cents) {
//     cents % 1 === 0 ? sum++ :
//         cents % 5 === 0 ? sum++ : console.log("test")
// return sum;

// }

console.log(coins(3)); //=> 3
console.log(coins(56)); //=> 4
console.log(coins(25)); //=> 1
console.log(coins(192)); //=> 11
