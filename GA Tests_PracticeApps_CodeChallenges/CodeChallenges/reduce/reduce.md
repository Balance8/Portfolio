reduce

Difficulty: Medium

Prompt

Implement a function called reduce that takes three arguments:
An array
A callback function - this function takes an accumulator and an array element as argument
Initial value (this will be optional)

This function should reduce an array to a single value.

It should behave similar to JavaScript's native reduce function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce.

Examples

```
reduce([1,2,3], function(accum, elem) {
    return accum + elem;
}) //=> 6

reduce([1,11], function(accum, elem) {
    return accum + elem;
}, 5) //=> 17
```
