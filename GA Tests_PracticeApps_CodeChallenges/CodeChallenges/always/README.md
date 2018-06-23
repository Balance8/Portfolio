always

Difficulty: Basic

Prompt

Write a function called always that accepts a single parameter and returns a function. The function that is returned should ALWAYS return the parameter passed into always.

Examples

```
let cat = always('cat');
cat(); //=> 'cat'

let awooga = always('boomchakalaka');
awooga(); //=> 'boomchakalaka'
```
