function mean(params) {
  let meanT = params.reduce((x, y) => x + y);
  return meanT / params.length;
}
