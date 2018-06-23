function accum(s) {
  totalArr = [];
  s.split("").forEach((e, i) => {
    for (let j = 0; j <= i; j++) {
      j === 0 ? totalArr.push(e.toUpperCase()) : totalArr.push(e.toLowerCase());
    }
    i === s.length - 1 ? "" : totalArr.push("-");
  });
  return totalArr.join("");
}
