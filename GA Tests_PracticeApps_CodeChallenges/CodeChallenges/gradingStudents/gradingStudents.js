function gradingStudents(grades) {
  let fGrade = [];
  grades.forEach(grade => {
    grade < 38 || grade % 5 < 3
      ? fGrade.push(grade)
      : fGrade.push(grade + (5 - (grade % 5)));
  });
  return fGrade;
}
//   grades.forEach(grade => {
//     let fill = (10 - (grade % 10) + (grade % 10)) / 2 - (grade % 10);
//     console.log(fill);
//     grade < 37
//       ? console.log(grade)
//       : fill < 3 && fill > 0
//         ? console.log(`${grade}`[0] + 5)
//         : console.log(Math.ceil(grade));

// grade > 40
//   ? grade % 10 < 5
//     ? (10 - (grade % 10) + (grade % 10)) / 2 - (grade % 10) > 3
//       ? console.log(`${grade}`[0] + 5)
//       : console.log(Math.ceil(grade))
//     : console.log(Math.ceil(grade))
//   : console.log(grade);
//   });

console.log(gradingStudents([73, 67, 38, 33]));
