const myFunctions = require("../src/dottest.js");

describe("dotCheck", () => {
  it("Checking with two vectors of values (1,1,1) which will equate to a dot product of 3", () => {
    expect(myFunctions.dotCheck()).toEqual(3);
  });
});

describe("dotCheck1", () => {
  it("Two zero vectors should return a dot product of 0", () => {
    expect(myFunctions.dotCheck1()).toEqual(0);
  });
});

describe("dotCheck2", () => {
  it("Invalid operation between a vec object and an array throwns an error", () => {
    expect(function () {
      myFunctions.dotCheck2();
    }).toThrow("dot(): types are not the same ");
  });
});
