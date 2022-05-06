const myFunctions = require("../src/equalTest.js");
var vec = require("3dvec/vec");

describe("equalCheck", () => {
  it("Checks if two vectors of same value are true", () => {
    expect(myFunctions.equalCheck()).toEqual(true);
  });
});

describe("equalCheck1", () => {
  it("Equating an array to vector throws an error", () => {
    expect(function () {
      myFunctions.equalCheck1();
    }).toThrow("equal: types different");
  });
});
