function gradingStudents(grades) {
  finalScore = 0;
  grades.forEach(grade => {
    grade > 40 ? console.log(grade % 10) : console.log(grade);
  });
}

gradingStudents([73, 67, 38, 33]);
