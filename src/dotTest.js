var vec = require("3dvec/vec");
var dot = require("3dvec/dot");
function dotCheck() {
  var x = vec(1, 1, 1);
  var y = vec(1, 1, 1);
  return dot(x, y);
}

function dotCheck1() {
  var x = vec(1, 0, 0);
  var y = vec(0, 0, 0);
  return dot(x, y);
}

function dotCheck2() {
  var x = vec(0, 0, 0);
  var y = [0, 0, 0];
  return dot(x, y);
}
module.exports = {
  dotCheck,
  dotCheck1,
  dotCheck2,
};
