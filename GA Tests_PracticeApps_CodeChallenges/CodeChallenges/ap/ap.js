function ap(fns, lst) {
  // let element = 0
  // for (let i = 0; i < lst.length; i++) {
  //     return lst[i];
  // }
  // let x = lst
  // for (let i = 0; i < lst.length; i++) {
  //     console.log(lst[i]);

  // }

  // console.log(x)
  // console.log(lst[x])

  let appArray = [];

  fns.forEach(e => {
    lst.forEach(element => {
      appArray.push(e(element));
    });
  });
  return appArray;
}

function multiplyTwo(x) {
  return x * 2;
}
function addThree(n) {
  return n + 3;
}

console.log(ap([multiplyTwo, addThree], [1, 2, 3])); //=> [2, 4, 6, 4, 5, 6]

function addTasty(str) {
  return `tasty ${str}`;
}
function toUpper(str) {
  return str.toUpperCase();
}

// ap([addTasty('tasty '), toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
