/**
* This function creates a 3D vector
* For example, vec3() would return (0,0,0) of type 'vec3'
* @param {Array} [array] - passing an array of size 3 would convert it into a vec3 array
* @returns {vec3} a 3d vector 
*/
function vec3()
{

    var out = new Array(3);
    out.type = 'vec3';
    switch ( arguments.length ) {
    case 0:
      out[0] = 0.0;
      out[1] = 0.0;
      out[2] = 0.0;
      return out;
    case 1:
    if((arguments[0].type == "vec3")) {
      out[0] = arguments[0][0];
      out[1] = arguments[0][1];
      out[2] = arguments[0][2];
      return out;
    }
    case 3:
      out[0] = arguments[0];
      out[1] = arguments[1];
      out[2] = arguments[2];
      return out;
      default:
        throw "vec3: wrong arguments";
    }

}


module.exports = vec3;