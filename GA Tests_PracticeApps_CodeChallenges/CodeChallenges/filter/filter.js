function filter(array, cb) {
  var x = [];
  for (let index = 0; index < array.length; index++) {
    cb(array[index]) ? x.push(array[index]) : "";
  }
  return x;
}

filter(["a", "aa", "aaa"], function(str) {
  //=> ['a']
  if (str.length < 2) {
    return true;
  }
});
