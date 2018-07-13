let timeConversion = s => {
  console.log(s.slice(-2));
  console.log(s.slice(0, 2));
  let newVal = 0;
  let firstTwo = s.slice(0, 2);
  firstTwo === "12" && s.slice(-2) === "AM"
    ? (newVal = "00")
    : firstTwo === "12" && s.slice(-2) === "PM"
      ? (newVal = 12)
      : s.slice(-2) === "PM"
        ? (newVal = parseInt(firstTwo) + 12)
        : (newVal = firstTwo);
  return `${newVal}` + s.slice(2, -2);
  //   let newVal;
  //   s[8] === "P"
  //     ? (newVal = parseInt(s[1]) + 12)
  //     : s[0] + s[1] == 12 && s[8] === "A"
  //       ? ""
  //       : (newVal = s[0] + s[1]);
  //   return `${newVal}` + s.slice(2, -2);
};

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:45:54PM"));
console.log(timeConversion("12:45:54AM"));
console.log(timeConversion("11:59:59PM"));
console.log(timeConversion("06:40:03AM"));
