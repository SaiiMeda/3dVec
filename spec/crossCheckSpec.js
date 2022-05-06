const myFunctions = require("../src/crosstest.js");
var vec = require("3dvec/vec");

describe("crossCheck", () => {
  it("cross product of two vectors of values (1,1,1), and (7,1,1) should return a vec of (0,-6,-6)", () => {
    expect(myFunctions.crossCheck()).toEqual(vec(0, 6, -6));
  });
});

describe("crossCheck1", () => {
  it("cross a vector with value of (1,1,1) should return a zero vector", () => {
    expect(myFunctions.crossCheck1()).toEqual(vec(0, 0, 0));
  });
});

describe("crossCheck2", () => {
  it("crossing a non vector to a vector", () => {
    expect(function () {
      myFunctions.crossCheck2();
    }).toThrow("cross: types aren't matched vec3");
  });
});

describe("crossCheck3", () => {
  it("cross between two vectors of values(-1,-1,-1) which returns a zero vector", () => {
    expect(myFunctions.crossCheck3()).toEqual(vec(0, 0, 0));
  });
});
