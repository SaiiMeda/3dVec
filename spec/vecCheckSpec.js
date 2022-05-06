const myFunctions = require("../src/vectest.js");
var vec = require("3dvec/vec");

describe("vecCheck", () => {
  it("returns a vector object", () => {
    expect(myFunctions.vecCheck()).toEqual(vec(1, 1, 1));
  });
});

describe("vecCheck1", () => {
  it("returns a vector object with no parameters so a default vector with (0,0,0) should be created", () => {
    expect(myFunctions.vecCheck1()).toEqual(vec(0, 0, 0));
  });
});

describe("vecCheck2", () => {
  it("returns a vector with one parameter shouldn't be created", () => {
    expect(function () {
      myFunctions.vecCheck2();
    }).toThrow("vec3: wrong arguments");
  });
});
