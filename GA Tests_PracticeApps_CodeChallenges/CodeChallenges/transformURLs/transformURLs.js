function transformURLs(domains) {
  newArr = [];
  domains.forEach(element => {
    newArr.push(`http://www.${element}/`);
  });
  return newArr;
}

console.log(transformURLs(["cats.com", "jtamsut.com"])); //=> ["http://www.cats.com/", "http://www.jtamsut.com/"]
