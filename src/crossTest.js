var vec = require("3dvec/vec");
var cross = require("3dvec/cross");

function crossCheck() {
  var x = vec(1, 1, 1);
  var y = vec(7, 1, 1);
  return cross(x, y);
}

function crossCheck1() {
  var x = vec(1, 1, 1);
  var y = vec(0, 0, 0);
  return cross(x, y);
}

function crossCheck2() {
  var x = vec(0, 0, 0);
  var y = [0, 0, 0];
  return cross(x, y);
}
function crossCheck3() {
  var x = vec(-1, -1, -1);
  var y = vec(-1, -1, -1);
  return cross(x, y);
}
module.exports = {
  crossCheck,
  crossCheck1,
  crossCheck2,
  crossCheck3,
};
