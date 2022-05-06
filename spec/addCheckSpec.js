const myFunctions = require("../src/addTest.js");
var vec = require("3dvec/vec");

describe("addCheck", () => {
  it("add two vectors of values (1,1,1) returns a vec of (2,2,2)", () => {
    expect(myFunctions.addCheck()).toEqual(vec(2, 2, 2));
  });
});

describe("addCheck1", () => {
  it("adds two zero vectors which returns a zero vector", () => {
    expect(myFunctions.addCheck1()).toEqual(vec(0, 0, 0));
  });
});

describe("addCheck2", () => {
  it("Adding a non vector to a vector", () => {
    expect(function () {
      myFunctions.addCheck2();
    }).toThrow("add(): trying to add different types");
  });
});

describe("addCheck3", () => {
  it("adds two zero vectors which returns a zero vector", () => {
    expect(myFunctions.addCheck3()).toEqual(vec(-2, -2, -2));
  });
});
