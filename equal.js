/**
 * This function checks if two vectors (u,v) are equal or not
 * For example, equal(vec3(1,1,1),vec3(1,1,1)) would return True
 * @param {vec3} u the first vector we're using to equate
 * @param {vec3} v the second vector we're using to equate
 * @returns {boolean} the bool value if they're true or false
 */
 function equal(u, v) {
  if (u.type != v.type) throw "equal: types different";
  if (u.type == "vec3") {
    for (var i = 0; i < u.length; ++i) if (u[i] !== v[i]) return false;
    return true;
  }
}

module.exports = equal;
