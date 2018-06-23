ap

Difficulty: Basic

Prompt

Write a function called ap that applies a list of functions to a list of values.

Examples
```
function multiplyTwo(x) { return x \* 2 };
function addThree(n) { return n + 3 };

ap([multiplyTwo, addThree], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]

function addTasty(str) { return `tasty ${str}` };
function toUpper(str) { return str.toUpperCase() };

ap([addTasty('tasty '), toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
