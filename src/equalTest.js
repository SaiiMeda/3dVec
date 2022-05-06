var vec = require("3dvec/vec");
var equal = require("3dvec/equal");

function equalCheck() {
  var x = vec(1, 1, 1);
  var y = vec(1, 1, 1);
  return equal(x, y);
}

function equalCheck1() {
  var x = vec(0, 0, 0);
  var y = [0, 0, 0];
  return equal(x, y);
}
module.exports = {
  equalCheck,
  equalCheck1,
};
