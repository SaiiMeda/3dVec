var vec = require("3dvec/vec");
var add = require("3dvec/add");

function addCheck() {
  var x = vec(1, 1, 1);
  var y = vec(1, 1, 1);
  return add(x, y);
}

function addCheck1() {
  var x = vec(0, 0, 0);
  var y = vec(0, 0, 0);
  return add(x, y);
}

function addCheck2() {
  var x = vec(0, 0, 0);
  var y = [0, 0, 0];
  return add(x, y);
}
function addCheck3() {
  var x = vec(-1, -1, -1);
  var y = vec(-1, -1, -1);
  return add(x, y);
}
module.exports = {
  addCheck,
  addCheck1,
  addCheck2,
  addCheck3,
};
