function greaterThan(n) {
  console.log(n);
  return function(m) {
    console.log(greaterThan);
    return m > n;
  };
}
var greaterThan = greaterThan(10);
console.log(greaterThan(11));
// → true
