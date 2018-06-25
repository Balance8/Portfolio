function hammingDistance(x, y) {
  var xBin = x.toString(2).padStart(3, "0");
  var yBin = y.toString(2).padStart(3, "0");
  var maxLength = xBin.length > yBin.length ? xBin.length : yBin.length;
  var difference = 0;

  for (i = 0; i < maxLength; i++) {
    xBin[i] !== yBin[i] ? (difference += 1) : 0;
  }
  return difference;
}
console.log(hammingDistance(1, 4));
console.log(hammingDistance(1, 4)); //=> 2
console.log(hammingDistance(5, 6)); //=> 2
console.log(hammingDistance(3, 9)); //=> 0
