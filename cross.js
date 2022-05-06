var vec = require("3dvec/vec");
function cross(u, v)
{
    if ( u.type == 'vec3' && v.type == 'vec3') {
      var result = vec(
          u[1]*v[2] - u[2]*v[1],
          u[2]*v[0] - u[0]*v[2],
          u[0]*v[1] - u[1]*v[0]
      );
      return result;
    }
    throw "cross: types aren't matched vec3";
}
module.exports = cross