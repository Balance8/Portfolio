truncateString

Difficulty: Basic

Prompt

Write a function called truncateString that accepts two arguments: a string and an integer greater or equal to 1. It should truncate the string if the length of the string is greater than integer (second argument) passed to the truncateString function. It should return the truncated string with an ellipsis (...) added at the end. Please note that white spaces count towards the length of the input string.

Hint: Take a look at the String.prototype.slice method here.

Examples

```
truncateString('cat', 1) //=> 'c...'
truncateString('This coding challenge is pretty cool!', 9) //=> 'This codi...'
```
