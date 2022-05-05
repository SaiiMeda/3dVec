/**
* This function performs a cross product between two vectors (u,v) 
* For example, equal(vec3(1,1,1),vec3(7,1,1)) would return vec3(0,6,-6)
* @param {vec3} u the first vector
* @param {vec3} v the second vector 
* @returns {vec3} the vec3 product after the cross product.     
*/
function cross(u, v)
{
    if ( u.type == 'vec3' && v.type == 'vec3') {
      var result = vec3(
          u[1]*v[2] - u[2]*v[1],
          u[2]*v[0] - u[0]*v[2],
          u[0]*v[1] - u[1]*v[0]
      );
      return result;
    }
    throw "cross: types aren't matched vec3 or vec4";
}
module.exports = cross;