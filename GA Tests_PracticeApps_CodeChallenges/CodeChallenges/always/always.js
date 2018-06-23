var always = x => y => x;

console.log(always("text"));

let cat = always("cat");
console.log(cat()); //=> 'cat'

let awooga = always("boomchakalaka");
awooga(); //=> 'boomchakalaka'
