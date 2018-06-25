/*var every = function(x,y){
  var output = x.every(y);
  return output;
}
*/
function every(x, y) {
  for (let i = 0; i < x.length; i++) {
    if (!y(x[i])) {
      return false;
    }
  }
  return true;
}

function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

const array1 = [1, 30, 39, 29, 10, 13];

console.log(every(array1, isBelowThreshold));
//console.log(array1.every(isBelowThreshold));
