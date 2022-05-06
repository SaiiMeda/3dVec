/**
 * This function performs a dot product between two vectors (u,v)
 * For example, equal(vec3(1,1,1),vec3(1,1,1)) would return 3
 * @param {vec3} u the first vector
 * @param {vec3} v the second vector
 * @returns {int} the integer value of the dot product
 */
 function dot(u, v) {
  if (u.type != v.type) {
    throw "dot(): types are not the same ";
  }

  var sum = 0.0;
  for (var i = 0; i < u.length; i++) {
    sum += u[i] * v[i];
  }
  return sum;
}
module.exports = dot;
