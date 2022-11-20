function funX(x) {
  return function funY(y) {
    return x+y;
  }
}
console.log(funX(6)(5));