const log = function (a, b, ...rest) {
  //оператор рест пишется в конце как три точки
  console.log(a, b, rest);
};
log("basic", "rest", "operator", "usade");

function calcOrDouble(number, basis = 2) {
  console.log(number * basis);
}
calcOrDouble(3);

