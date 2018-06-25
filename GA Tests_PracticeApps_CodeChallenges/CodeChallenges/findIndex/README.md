findIndex

Difficulty: Basic

Prompt

Write a function called findIndex that accepts two parameters:
An array
A callback function

findIndex should return the index of the first element in the array that satisfies the callback function passed to it.

If no values satisfy the callback function -1 should be returned.
Examples

```
findIndex([5, 12, 8, 130, 44], function(num) { //=> 3
    return num > 13;
})
```
