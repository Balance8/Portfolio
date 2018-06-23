minBy

Difficulty: Basic

Prompt
Write a function called minBy that takes a function and two values, and returns whichever value produces the smaller result when passed to the provided function.

Examples

```
function square(n) {
return n\*n;
}

minBy(square, -3, 2); //=> 2
```
