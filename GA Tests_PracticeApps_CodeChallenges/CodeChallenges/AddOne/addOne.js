function addOne(num) {
  if (typeof num === "number") return num + 1;

  return "A valid number must be provided!";
}

console.log(addOne(null));
