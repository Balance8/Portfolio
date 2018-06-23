some

Difficulty: Basic

Prompt

Write a function called some that tests whether at least one element in the array passes the test implemented by the provided callback function. some should return true if at least one element passes the test (i.e., causes the callback function to be evaluated to true).

Examples
```
var array = [1, 2, 3, 4, 5];
var noEvens = [3,5,7];

var even = function(element) {
  // checks whether an element is even
  return element % 2 == 0;
};

some(array, even) //=> true
some(noEvens, even) //=> false