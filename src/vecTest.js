var vec = require("3dvec/vec");

function vecCheck() {
  var x = vec(1, 1, 1);
  return x;
}

function vecCheck1() {
  var x = vec(0, 0, 0);
  return x;
}

function vecCheck2() {
  var x = vec(1);
  return x;
}
module.exports = {
  vecCheck,
  vecCheck1,
  vecCheck2,
};
