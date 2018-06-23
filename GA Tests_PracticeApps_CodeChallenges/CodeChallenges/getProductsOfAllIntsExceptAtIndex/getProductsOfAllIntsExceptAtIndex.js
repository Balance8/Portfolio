function getProductsOfAllIntsExceptAtIndex(values) {
  var result = [];

  for (var i = 0; i < values.length; i++) {
    var product = 1;
    console.log(i + " i");

    for (var j = 0; j < values.length; j++) {
      console.log(j + " j");
      if (j != i) {
        product *= values[j];
      }
    }
    // console.log(product)
    result.push(product);
  }

  return result;
}
