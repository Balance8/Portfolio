function bubbleSort(items) {
  var length = items.length;
  for (var i = length - 1; i >= 0; i--) {
    console.log(
      i +
        `
------------ i`
    );
    for (var j = length - i; j > 0; j--) {
      console.log(
        j +
          `
------------ j`
      );
      if (items[j] < items[j - 1]) {
        var tmp = items[j];
        items[j] = items[j - 1];
        items[j - 1] = tmp;
      }
      console.log(
        j +
          `
------------ j2`
      );
    }
  }
  return items;
}
