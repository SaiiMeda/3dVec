/**
* This function performs addition between two vectors (u,v) 
* For example, equal(vec3(1,1,1),vec3(1,1,1)) would return vec3(2,2,2)
* @param {vec3} u the first vector
* @param {vec3} v the second vector 
* @returns {vec3} the vector resulting after addition
*/
function add(u, v)
{

  if ( u.type != v.type ) {
      throw "add(): trying to add different types";
  }
  if(u.type== "vec3"){
    var result = new Array(u.length);
    result.type = u.type;
    for(var i=0; i<u.length; i++) {
      result[i] = u[i] + v[i];
      }
      return result;
    }
}

module.exports = add;