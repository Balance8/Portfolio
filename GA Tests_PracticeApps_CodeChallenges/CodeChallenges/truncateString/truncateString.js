function truncateString(str, num) {
  return `${str.slice(num - num, num)}...`;
}

console.log(truncateString("cat", 1)); //=> 'c...'
console.log(truncateString("This coding challenge is pretty cool!", 9)); //=> 'This codi...'
