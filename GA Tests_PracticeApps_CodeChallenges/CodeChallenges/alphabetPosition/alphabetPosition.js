let abc = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ");
function alphabetPosition(text) {
  console.log(abc[0]);

  abc.findIndex((e, i) => text.split(""));
  text.split("").map((e, i) => abc.findIndex(i => e === abc[10]));
  return text;
}

function test(x) {
  return x === abc[0];
}

//alphabetPosition("The sunset sets at twelve o' clock.") //"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11";
alphabetPosition("abc"); //"20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20";
